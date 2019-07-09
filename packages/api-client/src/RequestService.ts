import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import * as HTTP_STATUS from 'http-status-codes';

import {ClientOptions} from './APIClient';
import {ExceptionMapper, InvalidResponseError} from './APIException';

enum HttpMethod {
  DELETE = 'delete',
  GET = 'get',
  HEAD = 'head',
  OPTIONS = 'options',
  PATCH = 'patch',
  POST = 'post',
  PUT = 'put',
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type AxiosResponseWithoutData<T> = Omit<AxiosResponse<unknown>, 'data'> & T;
export interface AxiosConfigWithData<T> extends AxiosRequestConfig {
  data?: T;
}
export type RequestInjectorFn<T> = (
  baseConfig: AxiosConfigWithData<T>
) => AxiosConfigWithData<T> | Promise<AxiosConfigWithData<T>>;
export type ResponseInjectorFn<T> = (
  response: AxiosResponseWithoutData<T>
) => AxiosResponseWithoutData<T> | Promise<AxiosResponseWithoutData<T>>;

export class RequestService<T> {
  constructor(private readonly config: ClientOptions<T>) {}

  public async delete<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    const config = await this.injectConfig(
      {
        method: HttpMethod.DELETE,
        url: `${this.config.apiUrl}${url}`,
      },
      options
    );

    const response = await this.request<U>(config);
    return response.data;
  }

  public async get<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    const config = await this.injectConfig(
      {
        method: HttpMethod.GET,
        url: `${this.config.apiUrl}${url}`,
      },
      options
    );

    const response = await this.request<U>(config);
    return response.data;
  }

  public async head<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    const config = await this.injectConfig(
      {
        method: HttpMethod.HEAD,
        url: `${this.config.apiUrl}${url}`,
      },
      options
    );

    const response = await this.request<U>(config);
    return response.data;
  }

  public async options<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    const config = await this.injectConfig(
      {
        method: HttpMethod.OPTIONS,
        url: `${this.config.apiUrl}${url}`,
      },
      options
    );

    const response = await this.request<U>(config);
    return response.data;
  }

  public async patch<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    const config = await this.injectConfig(
      {
        method: HttpMethod.PATCH,
        url: `${this.config.apiUrl}${url}`,
      },
      options
    );

    const response = await this.request<U>(config);
    return response.data;
  }

  public async post<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    const config = await this.injectConfig(
      {
        method: HttpMethod.POST,
        url: `${this.config.apiUrl}${url}`,
      },
      options
    );

    const response = await this.request<U>(config);
    return response.data;
  }

  public async put<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    const config = await this.injectConfig(
      {
        method: HttpMethod.PUT,
        url: `${this.config.apiUrl}${url}`,
      },
      options
    );

    const response = await this.request<U>(config);
    return response.data;
  }

  public setApiUrl(apiUrl: string): void {
    this.config.apiUrl = apiUrl;
  }

  public async request<U>(config: AxiosConfigWithData<T>): Promise<AxiosResponse<U>> {
    try {
      const response = await axios.request<U>(config);
      const contentType = response.headers['content-type'] ? String(response.headers['content-type']) : undefined;

      if (contentType) {
        if (contentType.includes('application/json') || config.responseType) {
          return response;
        } else {
          throw new InvalidResponseError('The server responded with invalid data: No JSON sent.');
        }
      } else if (response.status === HTTP_STATUS.NO_CONTENT) {
        return response;
      } else {
        throw new InvalidResponseError('The server responded with invalid data: No Content-Type set.');
      }
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }

  public setRequestInjector(requestInjector: RequestInjectorFn<T>): void {
    this.config.requestInjector = requestInjector;
  }

  public removeRequestInjector(): void {
    delete this.config.requestInjector;
  }

  private async injectConfig(
    baseConfig: AxiosRequestConfig,
    options?: AxiosRequestConfig
  ): Promise<AxiosConfigWithData<T>> {
    if (typeof this.config.requestInjector === 'function') {
      baseConfig = await this.config.requestInjector(baseConfig);
    }

    if (typeof options !== 'undefined') {
      return {
        ...baseConfig,
        ...(!!options && options),
      };
    }

    return baseConfig;
  }
}
