import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';

export class ReasonAPI {
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
   * Retrieve a single reason
   */
  public retrieveReason(id: string): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Reason.reasons(id);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve reasons
   */
  public retrieveLocations(): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Reason.reasons();
    return this.requestService.post(endpoint);
  }
}
