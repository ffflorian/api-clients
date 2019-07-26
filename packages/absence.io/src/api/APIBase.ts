import {APIClient} from '@ffflorian/api-client';
import {Authorization, ClientOptions, RequestOptions} from '../interfaces';

export class APIBase {
  protected readonly apiClient: APIClient<RequestOptions>;
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
    this.options.apiKey = authorization.apiKey;
    this.options.apiKeyId = authorization.apiKeyId;
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.setApiUrl(newUrl);
  }

  protected checkApiKey(apiName?: string): void {
    apiName = `the "${apiName}"` || 'this';
    if (!this.options.apiKey || !this.options.apiKeyId) {
      throw new Error(`An API key needs to be set in order to use ${apiName} API`);
    }
  }
}
