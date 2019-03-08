import axios, {AxiosRequestConfig} from 'axios';

import {ExceptionMapper, InvalidResponseError} from './APIException';
import {ClientOptions, HttpStatus, RequestOptions} from './interfaces/';

export class RequestService {
  private readonly apiKey?: string;
  private apiUrl = 'https://crates.io/api/v1';

  constructor(options?: ClientOptions) {
    if (options) {
      if (options.apiUrl) {
        this.setApiUrl(options.apiUrl);
      }
      if (options.apiKey) {
        this.apiKey = options.apiKey;
      }
    }
  }

  public get<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('get', endpoint, parameters);
  }

  public setApiUrl(apiUrl: string): void {
    this.apiUrl = apiUrl;
  }

  private async request<T>(method: 'get', endpoint: string, parameters?: RequestOptions): Promise<T> {
    const config: AxiosRequestConfig = {
      method,
      params: parameters,
      url: this.apiUrl + endpoint,
    };

    if (this.apiKey) {
      config.headers = {
        Authorization: this.apiKey,
      };
    }

    try {
      const {data, headers, status} = await axios.request<T>(config);
      const contentType = headers['content-type'] ? String(headers['content-type']) : undefined;

      if (contentType) {
        if (contentType.includes('application/json')) {
          return data;
        } else {
          throw new InvalidResponseError('The server responded with invalid data: No JSON sent.');
        }
      } else if (status === HttpStatus.NO_CONTENT) {
        return data;
      } else {
        throw new InvalidResponseError('The server responded with invalid data: No Content-Type set.');
      }
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }
}
