import axios, {AxiosRequestConfig} from 'axios';
import * as HTTP_STATUS from 'http-status-codes';

import {ClientOptions} from './APIClient';
import {ExceptionMapper, InvalidResponseError} from './APIException';

export type InjectorFn = (baseConfig: AxiosRequestConfig) => AxiosRequestConfig;

enum HttpMethod {
  DELETE = 'delete',
  GET = 'get',
  HEAD = 'head',
  OPTIONS = 'options',
  PATCH = 'patch',
  POST = 'post',
  PUT = 'put',
}

export class RequestService {
  constructor(private readonly config: ClientOptions) {}

  public delete<T>(url: string, optionsOrInjector?: AxiosRequestConfig | InjectorFn): Promise<T> {
    const config = this.injectConfig(
      {
        method: HttpMethod.DELETE,
        url: this.config.apiUrl + url,
      },
      optionsOrInjector
    );

    return this.request<T>(config);
  }

  public get<T>(url: string, optionsOrInjector?: AxiosRequestConfig): Promise<T> {
    const config = this.injectConfig(
      {
        method: HttpMethod.GET,
        url: this.config.apiUrl + url,
      },
      optionsOrInjector
    );

    return this.request<T>(config);
  }

  public head<T>(url: string, optionsOrInjector?: AxiosRequestConfig): Promise<T> {
    const config = this.injectConfig(
      {
        method: HttpMethod.HEAD,
        url: this.config.apiUrl + url,
      },
      optionsOrInjector
    );

    return this.request<T>(config);
  }

  public options<T>(url: string, optionsOrInjector?: AxiosRequestConfig): Promise<T> {
    const config = this.injectConfig(
      {
        method: HttpMethod.OPTIONS,
        url: this.config.apiUrl + url,
      },
      optionsOrInjector
    );

    return this.request<T>(config);
  }

  public patch<T>(url: string, optionsOrInjector?: AxiosRequestConfig): Promise<T> {
    const config = this.injectConfig(
      {
        method: HttpMethod.PATCH,
        url: this.config.apiUrl + url,
      },
      optionsOrInjector
    );

    return this.request<T>(config);
  }

  public post<T>(url: string, optionsOrInjector?: AxiosRequestConfig): Promise<T> {
    const config = this.injectConfig(
      {
        method: HttpMethod.POST,
        url: this.config.apiUrl + url,
      },
      optionsOrInjector
    );

    return this.request<T>(config);
  }

  public put<T>(url: string, optionsOrInjector?: AxiosRequestConfig): Promise<T> {
    const config = this.injectConfig(
      {
        method: HttpMethod.PUT,
        url: this.config.apiUrl + url,
      },
      optionsOrInjector
    );

    return this.request<T>(config);
  }

  public setApiUrl(apiUrl: string): void {
    this.config.apiUrl = apiUrl;
  }

  private injectConfig(
    baseConfig: AxiosRequestConfig,
    optionsOrInjector?: AxiosRequestConfig | InjectorFn
  ): AxiosRequestConfig {
    if (typeof optionsOrInjector === 'function') {
      return optionsOrInjector(baseConfig);
    }

    if (typeof this.config.requestInjector === 'function') {
      baseConfig = this.config.requestInjector(baseConfig);
    }

    if (typeof optionsOrInjector !== 'undefined') {
      return {
        ...baseConfig,
        ...(!!optionsOrInjector && optionsOrInjector),
      };
    }

    return baseConfig;
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const {data, headers, status} = await axios.request<T>(config);
      const contentType = headers['content-type'] ? String(headers['content-type']) : undefined;

      if (contentType) {
        if (contentType.includes('application/json')) {
          return data;
        } else {
          throw new InvalidResponseError('The server responded with invalid data: No JSON sent.');
        }
      } else if (status === HTTP_STATUS.NO_CONTENT) {
        return data;
      } else {
        throw new InvalidResponseError('The server responded with invalid data: No Content-Type set.');
      }
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }
}
