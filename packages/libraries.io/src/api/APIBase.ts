import type {AxiosInstance} from 'axios';

import type {ClientOptions} from '../interfaces';

export class APIBase {
  protected readonly apiClient: AxiosInstance;
  protected readonly options: ClientOptions;

  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;
  }

  /**
   * Set a new API key.
   * @param apiKey The new API key
   */
  public setApiKey(apiKey: string): void {
    this.options.apiKey = apiKey;
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }

  protected checkApiKey(apiName?: string): void {
    const name = apiName ? `the "${apiName}"` : 'this';
    if (!this.options.apiKey) {
      throw new Error(`An API key needs to be set in order to use ${name} API`);
    }
  }
}
