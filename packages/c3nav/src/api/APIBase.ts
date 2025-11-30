import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions} from '../interfaces/';

export class APIBase {
  protected readonly apiClient: APIClient;
  protected readonly options: ClientOptions;

  constructor(apiClient: APIClient, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;
  }

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }
}
