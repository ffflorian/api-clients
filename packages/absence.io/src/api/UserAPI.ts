import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';

export class UserAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  private checkApiKey() {
    if (!this.requestService.isApiKeySet()) {
      throw new Error('An API key needs to be set in order to use the checks API.');
    }
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.requestService.setApiUrl(newUrl);
  }

  /**
   * Register a new user for your company.
   * The newly created user will receive an invitation email.
   */
  public invite(): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.User.invite();
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve a user
   */
  public retrieveUser(id: string): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.User.users(id);
    return this.requestService.post(endpoint);
  }

  /**
   * Retrieve users
   */
  public retrieveUsers(): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.User.users();
    return this.requestService.post(endpoint);
  }
}
