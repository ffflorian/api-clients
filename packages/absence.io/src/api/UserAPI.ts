import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class UserAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.requestService.setApiUrl(newUrl);
  }

  /**
   * Register a new user for your company.
   * The newly created user will receive an invitation email.
   */
  public invite(): Promise<any> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.invite();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Retrieve a user
   * @param id The user id
   */
  public retrieveUser(id: string): Promise<any> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users(id);
    return this.apiClient.requestService.post(endpoint);
  }

  /**
   * Retrieve users
   */
  public retrieveUsers(): Promise<any> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users();
    return this.apiClient.requestService.post(endpoint);
  }
}
