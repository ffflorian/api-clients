import axios, {AxiosInstance, AxiosError, RawAxiosRequestConfig, RawAxiosResponseHeaders, AxiosHeaders} from 'axios';
import {Cookie as ToughCookie} from 'tough-cookie';
import type * as http from 'http';

import {
  IncomingMessage,
  Conversation,
  PostMessageResult,
  SignInData,
  OutgoingMessage,
  NewUser,
  Result,
  NewService,
  UpdateService,
  User,
} from './interfaces';
import {RegisterInfo} from './interfaces/RegisterInfo';

type AxiosRequestConfig<T = any> = RawAxiosRequestConfig<T> & {headers?: AxiosHeaders};

export class Roman {
  private readonly apiClient: AxiosInstance;
  private cookie?: ToughCookie;
  private static readonly defaultBaseURL = 'proxy.services.wire.com';

  constructor(baseURL: string);
  constructor(config: AxiosRequestConfig);
  constructor(configOrBaseURL: AxiosRequestConfig | string = Roman.defaultBaseURL) {
    if (typeof configOrBaseURL === 'string') {
      configOrBaseURL = {baseURL: configOrBaseURL};
    }

    this.apiClient = axios.create(configOrBaseURL);
  }

  private getCookie(): ToughCookie {
    if (!this.cookie) {
      throw new Error('No cookie stored. Please login first.');
    }
    return this.cookie;
  }

  private async request<T>(
    config: AxiosRequestConfig,
    accessTokenNeeded = true
  ): Promise<{data: T; headers: RawAxiosResponseHeaders}> {
    if (accessTokenNeeded) {
      if (config.headers) {
        config.headers.set('Cookie', this.getCookie().toString());
      } else {
        config.headers = new AxiosHeaders({Cookie: this.getCookie().toString()});
      }
    }

    try {
      const {data, headers} = await this.apiClient.request<T>(config);
      return {data, headers};
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const maybeMessage = (error as AxiosError<{message: string}>).response?.data?.message || '(no message)';
        const errorCode = (error as AxiosError).response?.status;
        throw new Error(`Request failed with status code ${errorCode}: ${maybeMessage}`);
      }
      throw error;
    }
  }

  /**
   * Set a new API URL.
   * @param url The new API URL.
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }

  /**
   * Broadcast a message on Wire
   */
  public async sendBroadcast(data: IncomingMessage): Promise<void> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: '/broadcast',
    };
    await this.request(config);
  }

  /**
   * Get conversation data
   */
  public async getConversation(): Promise<Conversation> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: '/conversation',
    };
    const {data} = await this.request<Conversation>(config);
    return data;
  }

  /**
   * Get your service's data
   */
  public async getService(): Promise<Result> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: '/service',
    };
    const {data} = await this.request<Result>(config);
    return data;
  }

  /**
   * Get a user's profile
   */
  public async getUser(userId: string): Promise<User> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `/users/${userId}`,
    };
    const {data} = await this.request<User>(config);
    return data;
  }

  private async setCookie(rawHeaders?: http.IncomingHttpHeaders): Promise<void> {
    if (!rawHeaders) {
      return;
    }

    const cookieHeader = rawHeaders['set-cookie'] || rawHeaders['Set-Cookie'];
    if (cookieHeader) {
      if (Array.isArray(cookieHeader)) {
        this.cookie = ToughCookie.parse(cookieHeader[0]);
      } else {
        this.cookie = ToughCookie.parse(cookieHeader);
      }
    }
  }

  /**
   * Login on Roman
   */
  public async login(data: SignInData): Promise<void> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: '/login',
    };
    const {headers} = await this.request(config, false);

    await this.setCookie(headers);
  }

  /**
   * Register a new Roman account
   */
  public async register(newUserData: NewUser): Promise<RegisterInfo> {
    const config: AxiosRequestConfig = {
      data: newUserData,
      method: 'post',
      url: '/register',
    };
    const {data} = await this.request<RegisterInfo>(config, false);
    return data;
  }

  /**
   * Create a new service
   */
  public async registerService(newServiceData: NewService): Promise<Result> {
    const config: AxiosRequestConfig = {
      data: newServiceData,
      method: 'post',
      url: '/service',
    };
    const {data} = await this.request<Result>(config);
    return data;
  }

  /**
   * Send a message on Wire
   */
  public async sendMessageToConversation(messageData: IncomingMessage): Promise<PostMessageResult> {
    const config: AxiosRequestConfig = {
      data: messageData,
      method: 'post',
      url: '/conversation',
    };
    const {data} = await this.request<PostMessageResult>(config);
    return data;
  }

  /**
   * Dummy. Bot developer should implement this
   * @deprecated
   */
  public async sendMessage(data: OutgoingMessage): Promise<void> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: '/messages',
    };
    await this.request(config);
  }

  /**
   * Update your service
   */
  public async updateService(updateServiceData: UpdateService): Promise<Result> {
    const config: AxiosRequestConfig = {
      data: updateServiceData,
      method: 'put',
      url: '/service',
    };
    const {data} = await this.request<Result>(config);
    return data;
  }
}
