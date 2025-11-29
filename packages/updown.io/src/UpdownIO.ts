import {APIClient} from '@ffflorian/api-client';

import {ChecksAPI, NodesAPI} from './api';
import type {API, ClientOptions} from './interfaces';

export class UpdownIO {
  public api: API;
  private readonly apiClient: APIClient;

  constructor(apiKey?: string);
  constructor(options?: ClientOptions);
  constructor(options?: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    this.apiClient = new APIClient('https://updown.io/api/', {
      headers: {
        ...(options?.apiKey && {'X-API-KEY': options.apiKey}),
      },
    });

    this.api = {
      checks: new ChecksAPI(this.apiClient),
      nodes: new NodesAPI(this.apiClient),
    };
  }

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.api.checks.setApiUrl(newURL);
    this.api.nodes.setApiUrl(newURL);
  }
}
