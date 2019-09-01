import axios, {AxiosInstance} from 'axios';

import {ChecksAPI, NodesAPI} from './api';
import {API, ClientOptions} from './interfaces';

export class UpdownIO {
  public api: API;
  private readonly apiClient: AxiosInstance;

  constructor(apiKey?: string);
  constructor(options?: ClientOptions);
  constructor(options?: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    this.apiClient = axios.create({
      baseURL: 'https://updown.io/api/',
    });

    this.apiClient.interceptors.request.use(config => {
      if (options && (options as ClientOptions).apiKey) {
        config.headers = {
          ...config.headers,
          'X-API-KEY': (options as ClientOptions).apiKey,
        };
      }
      return config;
    });

    this.api = {
      checks: new ChecksAPI(this.apiClient),
      nodes: new NodesAPI(this.apiClient),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.api.checks.setApiUrl(newUrl);
    this.api.nodes.setApiUrl(newUrl);
  }
}
