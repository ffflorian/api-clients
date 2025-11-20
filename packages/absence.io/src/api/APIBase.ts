import type {Authorization, ClientOptions} from '../interfaces';

export class APIBase {
  constructor(
    protected baseURL: string,
    protected readonly options: ClientOptions
  ) {}

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
    this.baseURL = newUrl;
  }

  protected checkApiKey(apiName?: string): void {
    const name = apiName ? `the "${apiName}"` : 'this';
    if (!this.options.apiKey || !this.options.apiKeyId) {
      throw new Error(`An API key needs to be set in order to use ${name} API`);
    }
  }
}
