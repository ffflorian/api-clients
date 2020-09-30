import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {API} from './interfaces';
import {
  BroadcastService,
  ConversationService,
  LoginService,
  MessagesService,
  RegisterService,
  ServiceService,
  UsersService,
} from './api';

export class Roman {
  private readonly apiClient: AxiosInstance;
  public readonly api: API;

  constructor(baseURL: string);
  constructor(config: AxiosRequestConfig);
  constructor(configOrBaseURL: AxiosRequestConfig | string) {
    if (typeof configOrBaseURL === 'string') {
      configOrBaseURL = {baseURL: configOrBaseURL};
    }

    this.apiClient = axios.create(configOrBaseURL);
    this.api = {
      broadcastService: new BroadcastService(this.apiClient),
      conversationService: new ConversationService(this.apiClient),
      loginService: new LoginService(this.apiClient),
      messagesService: new MessagesService(this.apiClient),
      registerService: new RegisterService(this.apiClient),
      serviceService: new ServiceService(this.apiClient),
      usersService: new UsersService(this.apiClient),
    };
  }

  /**
   * Set a new API URL.
   * @param url The new API URL.
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }
}
