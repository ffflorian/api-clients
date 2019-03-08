import axios, {AxiosRequestConfig} from 'axios';
import {HTTP_STATUS} from 'http-status-codes';

import {ExceptionMapper, InvalidResponseError} from './APIException';
import {HttpMethod, RequestOptions} from './interfaces/';

export class RequestService {
  constructor(private apiUrl: string) {}

  public delete<T>(url: string, parameters?: RequestOptions, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public delete<T>(url: string, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public delete<T>(
    url: string,
    optionsOrParameters?: AxiosRequestConfig | RequestOptions,
    additionalOptions?: AxiosRequestConfig
  ): Promise<T> {
    const config = this.buildConfiguration(url, HttpMethod.DELETE, optionsOrParameters, additionalOptions);
    return this.request<T>(config);
  }

  public get<T>(url: string, parameters?: RequestOptions, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public get<T>(url: string, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public get<T>(
    url: string,
    optionsOrParameters?: AxiosRequestConfig | RequestOptions,
    additionalOptions?: AxiosRequestConfig
  ): Promise<T> {
    const config = this.buildConfiguration(url, HttpMethod.GET, optionsOrParameters, additionalOptions);
    return this.request<T>(config);
  }

  public head<T>(url: string, parameters?: RequestOptions, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public head<T>(url: string, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public head<T>(
    url: string,
    optionsOrParameters?: AxiosRequestConfig | RequestOptions,
    additionalOptions?: AxiosRequestConfig
  ): Promise<T> {
    const config = this.buildConfiguration(url, HttpMethod.HEAD, optionsOrParameters, additionalOptions);
    return this.request<T>(config);
  }

  public options<T>(url: string, parameters?: RequestOptions, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public options<T>(url: string, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public options<T>(
    url: string,
    optionsOrParameters?: AxiosRequestConfig | RequestOptions,
    additionalOptions?: AxiosRequestConfig
  ): Promise<T> {
    const config = this.buildConfiguration(url, HttpMethod.OPTIONS, optionsOrParameters, additionalOptions);
    return this.request<T>(config);
  }

  public patch<T>(url: string, parameters?: RequestOptions, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public patch<T>(url: string, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public patch<T>(
    url: string,
    optionsOrParameters?: AxiosRequestConfig | RequestOptions,
    additionalOptions?: AxiosRequestConfig
  ): Promise<T> {
    const config = this.buildConfiguration(url, HttpMethod.PATCH, optionsOrParameters, additionalOptions);
    return this.request<T>(config);
  }

  public post<T>(url: string, parameters?: RequestOptions, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public post<T>(url: string, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public post<T>(
    url: string,
    optionsOrParameters?: AxiosRequestConfig | RequestOptions,
    additionalOptions?: AxiosRequestConfig
  ): Promise<T> {
    const config = this.buildConfiguration(url, HttpMethod.POST, optionsOrParameters, additionalOptions);
    return this.request<T>(config);
  }

  public put<T>(url: string, parameters?: RequestOptions, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public put<T>(url: string, additionalOptions?: AxiosRequestConfig): Promise<T>;
  public put<T>(
    url: string,
    optionsOrParameters?: AxiosRequestConfig | RequestOptions,
    additionalOptions?: AxiosRequestConfig
  ): Promise<T> {
    const config = this.buildConfiguration(url, HttpMethod.PUT, optionsOrParameters, additionalOptions);
    return this.request<T>(config);
  }

  public setApiUrl(apiUrl: string): void {
    this.apiUrl = apiUrl;
  }

  private buildConfiguration(
    url: string,
    method: HttpMethod,
    parameters?: RequestOptions,
    additionalOptions?: AxiosRequestConfig
  ): AxiosRequestConfig;
  private buildConfiguration(
    url: string,
    method: HttpMethod,
    additionalOptions?: AxiosRequestConfig
  ): AxiosRequestConfig;
  private buildConfiguration(
    url: string,
    method: HttpMethod,
    optionsOrParameters?: AxiosRequestConfig | RequestOptions,
    additionalOptions?: AxiosRequestConfig
  ): AxiosRequestConfig {
    return {
      method,
      url: this.apiUrl + url,
      ...(additionalOptions && optionsOrParameters ? {parameters: optionsOrParameters} : optionsOrParameters),
      ...(!!additionalOptions && additionalOptions),
    };
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
