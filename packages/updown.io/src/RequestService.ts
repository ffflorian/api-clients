import axios, {AxiosRequestConfig} from 'axios';
import {URL} from 'url';

import {ExceptionMapper, InvalidResponseError} from './APIException';
import {ClientOptions, CustomHeaders, HttpMethod, RequestOptions} from './interfaces/';

export class RequestService {
  private apiUrl = new URL('/api', 'https://updown.io');
  private readonly apiKey?: string;

  constructor(options?: ClientOptions) {
    if (options) {
      if (options.apiUrl) {
        this.setApiUrl(options.apiUrl);
      }
      this.apiKey = options.apiKey;
    }
  }

  public isApiKeySet(): boolean {
    return Boolean(this.apiKey);
  }

  public delete<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('delete', endpoint, parameters);
  }

  public get<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('get', endpoint, parameters);
  }

  public post<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('post', endpoint, parameters);
  }

  public put<T>(endpoint: string, parameters?: RequestOptions): Promise<T> {
    return this.request<T>('put', endpoint, parameters);
  }

  public setApiUrl(apiUrl: URL): void {
    this.apiUrl = apiUrl;
  }

  private static mapParameters(requestParameters?: RequestOptions) {
    const map: {[index: string]: string} = {
      apdexThreshold: 'apdex_t',
      apiKey: 'api-key',
      customHeaders: 'custom_headers',
      disabledLocations: 'disabled_locations',
      muteUntil: 'mute_until',
      stringMatch: 'string_match',
    };

    const mappedParameters: {[index: string]: string | boolean | number | CustomHeaders | string[]} = {};

    if (requestParameters) {
      for (const parameterKey in requestParameters) {
        const parameterValue = requestParameters[parameterKey as keyof RequestOptions];
        if (parameterValue) {
          const mappedOption = parameterKey in map ? map[parameterKey] : parameterKey;
          if (typeof parameterValue === 'object' && !(parameterValue instanceof Array)) {
            for (const customHeader in parameterValue) {
              mappedParameters[`${mappedOption}[${customHeader}]`] = parameterValue[customHeader];
            }
          } else {
            mappedParameters[mappedOption] = parameterValue;
          }
        }
      }
    }

    return mappedParameters;
  }

  private async request<T>(method: HttpMethod, endpoint: string, parameters?: RequestOptions): Promise<T> {
    const params = RequestService.mapParameters({
      ...parameters,
      apiKey: this.apiKey,
    });

    const config: AxiosRequestConfig = {
      method,
      params,
      url: new URL(this.apiUrl.pathname + endpoint, this.apiUrl).href,
    };

    try {
      const {data, headers} = await axios.request<T>(config);
      const contentType = headers['content-type'] ? String(headers['content-type']) : undefined;

      if (contentType) {
        if (contentType.includes('application/json')) {
          return data;
        } else {
          throw new InvalidResponseError('The server responded with invalid data: No JSON sent.');
        }
      } else {
        throw new InvalidResponseError('The server responded with invalid data: No Content-Type set.');
      }
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }
}
