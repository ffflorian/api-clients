import axios, {AxiosRequestConfig} from 'axios';
import {URL} from 'url';

import {ExceptionMapper, InvalidResponseError} from './APIException';
import {HTTP, Request} from './Interfaces';

export class RequestService {
  private apiUrl: URL;

  constructor(apiUrl: string) {
    this.apiUrl = new URL(apiUrl);
  }

  public async delete<T>(endpoint: string, parameters?: Request.Options): Promise<T> {
    return this.request<T>('delete', endpoint, parameters);
  }

  public get<T>(endpoint: string, parameters?: Request.Options): Promise<T> {
    return this.request<T>('get', endpoint, parameters);
  }

  public post<T>(endpoint: string, parameters?: Request.Options): Promise<T> {
    return this.request<T>('post', endpoint, parameters);
  }

  public put<T>(endpoint: string, parameters?: Request.Options): Promise<T> {
    return this.request<T>('put', endpoint, parameters);
  }

  public setApiUrl(apiUrl: string): void {
    this.apiUrl = new URL(apiUrl);
  }

  private async request<T>(
    method: HTTP.Method,
    endpoint: string,
    parameters?: Request.Options
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      method,
      params: parameters,
      url: new URL(endpoint, this.apiUrl).href,
    };

    try {
      const {data, headers, status} = await axios.request<T>(config);
      const contentType = headers['content-type'] ? String(headers['content-type']) : undefined;

      if (contentType) {
        if (contentType.includes('application/json')) {
          return data;
        } else {
          throw new InvalidResponseError('The server responded with invalid data: No JSON sent.');
        }
      } else if (status === HTTP.Status.NO_CONTENT) {
        return data;
      } else {
        throw new InvalidResponseError('The server responded with invalid data: No Content-Type set.');
      }
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }
}
