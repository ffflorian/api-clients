import type {APIClient} from '@ffflorian/api-client';

import type {Authorization, ClientOptions} from '../interfaces';

import {normalizeApiUrl} from '../normalizeApiUrl';

export class APIBase {
  protected readonly apiClient: APIClient;
  protected readonly options: ClientOptions;

  constructor(apiClient: APIClient, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;
  }

  /**
   * Set a new API key.
   * @param authorization The API authorization data
   */
  public setApiAuthorization(authorization: Authorization): void {
    if ('accessToken' in authorization) {
      this.options.accessToken = authorization.accessToken;
      this.options.apiKey = undefined;
      this.options.apiKeyId = undefined;
      return;
    }

    this.options.apiKey = authorization.apiKey;
    this.options.apiKeyId = authorization.apiKeyId;
    this.options.accessToken = undefined;
  }

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(normalizeApiUrl(newURL));
  }

  protected checkApiKey(apiName?: string): void {
    const name = apiName ? `the "${apiName}"` : 'this';
    if (!this.options.accessToken && (!this.options.apiKey || !this.options.apiKeyId)) {
      throw new Error(`API credentials need to be set in order to use ${name} API`);
    }
  }
}
