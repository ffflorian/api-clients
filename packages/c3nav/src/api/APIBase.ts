import {APIClient} from '@ffflorian/api-client';

import {ClientOptions, RequestOptions} from '../interfaces/';

export class APIBase {
  protected readonly apiClient: APIClient<RequestOptions>;
  protected readonly options: ClientOptions;

  constructor(apiClient: APIClient, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.setApiUrl(newUrl);
  }
}
