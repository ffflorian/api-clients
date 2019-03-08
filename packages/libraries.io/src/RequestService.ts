import axios, {AxiosRequestConfig} from 'axios';
import {URL} from 'url';

import {ExceptionMapper, InvalidResponseError} from './APIException';
import {
  ClientOptions,
  FilterOptions,
  HttpMethod,
  HttpStatus,
  LibrariesIOHeaders,
  LibrariesIOResult,
  RequestOptions,
} from './interfaces/';

export class RequestService {
  private readonly apiKey: string;
  private apiUrl = new URL('/api', 'https://libraries.io');

  constructor(options: ClientOptions) {
    if (options.apiUrl) {
      this.setApiUrl(options.apiUrl);
    }
    this.apiKey = options.apiKey;
  }

  public async delete<T>(endpoint: string, parameters?: RequestOptions): Promise<LibrariesIOHeaders> {
    const {rateLimit, rateLimitRemaining} = await this.request<T>('delete', endpoint, parameters);
    return {rateLimit, rateLimitRemaining};
  }

  public get<T>(endpoint: string, parameters?: RequestOptions): Promise<LibrariesIOResult<T>> {
    return this.request<T>('get', endpoint, parameters);
  }

  public post<T>(endpoint: string, parameters?: RequestOptions): Promise<LibrariesIOResult<T>> {
    return this.request<T>('post', endpoint, parameters);
  }

  public put<T>(endpoint: string, parameters?: RequestOptions): Promise<LibrariesIOResult<T>> {
    return this.request<T>('put', endpoint, parameters);
  }

  public setApiUrl(apiUrl: URL): void {
    this.apiUrl = apiUrl;
  }

  private static mapParameters(requestParameters?: RequestOptions) {
    const map: {[index: string]: string} = {
      apiKey: 'api_key',
      includePreRelease: 'include_prerelease',
      perPage: 'per_page',
      query: 'q',
      sortBy: 'sort',
    };

    const mappedParameters: {[index: string]: string | boolean | number | FilterOptions} = {};

    if (requestParameters) {
      for (const parameterKey in requestParameters) {
        let parameterValue = requestParameters[parameterKey as keyof RequestOptions];
        if (parameterValue) {
          const mappedOption = parameterKey in map ? map[parameterKey] : parameterKey;
          if (parameterValue instanceof Array) {
            parameterValue = parameterValue.join(',');
          } else if (
            typeof parameterValue === 'object' &&
            Object.values(parameterValue).some(val => val instanceof Array)
          ) {
            for (const filterKey in parameterValue) {
              const filterValue = parameterValue[filterKey as keyof FilterOptions];
              if (filterValue) {
                mappedParameters[filterKey] = filterValue.join(',');
              }
            }
          } else {
            mappedParameters[mappedOption] = parameterValue;
          }
        }
      }
    }

    return mappedParameters;
  }

  private async request<T>(
    method: HttpMethod,
    endpoint: string,
    parameters?: RequestOptions
  ): Promise<LibrariesIOResult<T>> {
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
      const {data, headers, status} = await axios.request<T>(config);

      const contentType = headers['content-type'] ? String(headers['content-type']) : undefined;
      const rateLimit = Number(headers['x-ratelimit-limit']);
      const rateLimitRemaining = Number(headers['x-ratelimit-remaining']);
      const totalResults = headers['total'] ? Number(headers['total']) : undefined;

      if (contentType) {
        if (contentType.includes('application/json')) {
          return {data, rateLimit, rateLimitRemaining, totalResults};
        } else {
          throw new InvalidResponseError('The server responded with invalid data: No JSON sent.');
        }
      } else if (status === HttpStatus.NO_CONTENT) {
        return {data, rateLimit, rateLimitRemaining};
      } else {
        throw new InvalidResponseError('The server responded with invalid data: No Content-Type set.');
      }
    } catch (error) {
      throw ExceptionMapper(error);
    }
  }
}
