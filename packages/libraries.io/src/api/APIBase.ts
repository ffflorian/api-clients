import {APIClient} from '@ffflorian/api-client';

import {ClientOptions, RequestOptions} from '../interfaces';

export class APIBase {
  protected readonly apiClient: APIClient<RequestOptions>;
  protected readonly options: ClientOptions;

  constructor(apiClient: APIClient, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;
  }

  protected checkApiKey(apiName?: string) {
    apiName = `the "${apiName}"` || 'this';
    if (!this.options.apiKey) {
      throw new Error(`An API key needs to be set in order to use ${apiName} API`);
    }
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.setApiUrl(newUrl);
  }

  /**
   * Set a new API key.
   * @param apiKey The new API key
   */
  public setApiKey(apiKey: string): void {
    this.options.apiKey = apiKey;
  }
}
