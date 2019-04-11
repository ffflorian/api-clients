import {APIClient, ClientOptions} from '@ffflorian/api-client';
import {Authorization} from '../interfaces';

export class APIBase<T> extends APIClient<T> {
  private readonly auth: Authorization;

  constructor(config: ClientOptions<T>, auth: Authorization) {
    super(config);
    this.auth = auth;
  }

  protected checkApiKey(apiName?: string) {
    apiName = `the "${apiName}"` || 'this';
    if (!this.auth.apiKey || !this.auth.apiKeyId) {
      throw new Error(`An API key needs to be set in order to use ${apiName} API`);
    }
  }

  /**
   * Set a new API key.
   * @param authorization The API authorization data
   */
  public setApiAuthorization(authorization: Authorization): void {
    this.auth.apiKey = authorization.apiKey;
    this.auth.apiKeyId = authorization.apiKeyId;
  }
}
