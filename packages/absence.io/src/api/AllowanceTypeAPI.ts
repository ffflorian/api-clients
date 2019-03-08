import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';

export class AllowanceTypeAPI {
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
   * Retrieve a single allowance type
   */
  public retrieveAllowanceType(id: string): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.AllowanceType.allowanceTypes(id);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve allowance types
   */
  public retrieveAllowanceTypes(): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.AllowanceType.allowanceTypes();
    return this.requestService.post(endpoint);
  }
}
