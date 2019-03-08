import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';

export class TimespanAPI {
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
   * Retrieve a single time entry
   */
  public retrieveTimespan(id: string): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Timespan.timespans(id);
    return this.requestService.get(endpoint);
  }

  /**
   * Query a list of time entries
   */
  public retrieveTimespans(): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Timespan.timespans();
    return this.requestService.post(endpoint);
  }
}
