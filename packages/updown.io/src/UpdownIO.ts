import {APIClient, RequestInjectorFn} from '@ffflorian/api-client';

import {ChecksAPI, NodesAPI} from './api';
import {API, ClientOptions, RequestOptions} from './interfaces';

export class UpdownIO {
  public api: API;
  private readonly apiClient: APIClient<RequestOptions>;

  constructor(apiKey?: string);
  constructor(options?: ClientOptions);
  constructor(options?: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    const requestInjector: RequestInjectorFn<RequestOptions> = config => {
      if (options && (options as ClientOptions).apiKey) {
        config.headers = {
          ...config.headers,
          'X-API-KEY': (options as ClientOptions).apiKey,
        };
      }
      return config;
    };

    this.apiClient = new APIClient({
      apiUrl: 'https://updown.io/api/',
      requestInjector,
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
