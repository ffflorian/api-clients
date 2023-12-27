import type {AxiosInstance} from 'axios';
import type {Authorization, ClientOptions} from '../interfaces';

export class APIBase {
  protected readonly apiClient: AxiosInstance;
  protected readonly options: ClientOptions;

  constructor(apiClient: AxiosInstance, options: ClientOptions) {
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
    this.apiClient.defaults.baseURL = newUrl;
  }

  protected checkApiKey(apiName?: string): void {
    const name = apiName ? `the "${apiName}"` : 'this';
    if (!this.options.apiKey || !this.options.apiKeyId) {
      throw new Error(`An API key needs to be set in order to use ${name} API`);
    }
  }
}
