import {APIClient} from '@ffflorian/api-client';

import {PackageAPI, SearchAPI} from './api';
import type {API, ClientOptions} from './interfaces/';

export class NpmsIO {
  public readonly api: API;
  private readonly apiClient: APIClient;

  constructor(options: ClientOptions = {}) {
    this.apiClient = new APIClient(options.apiUrl || 'https://api.npms.io/v2');

    this.api = {
      package: new PackageAPI(this.apiClient),
      search: new SearchAPI(this.apiClient),
    };
  }

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
    this.api.package = new PackageAPI(this.apiClient);
    this.api.search = new SearchAPI(this.apiClient);
  }
}
