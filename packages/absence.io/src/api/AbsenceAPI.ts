import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';

export class AbsenceAPI {
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
   * Create absences
   */
  public createAbsence(): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Absence.create();
    return this.requestService.post(endpoint);
  }

  /**
   * Retrieve an absence
   */
  public retrieveAbsence(id: string): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Absence.absences(id);
    return this.requestService.post(endpoint);
  }

  /**
   * Retrieve absences
   */
  public retrieveAbsences(): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Absence.absences();
    return this.requestService.post(endpoint);
  }

  /**
   * Update an existing absence
   */
  public updateAbsence(id: string): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Absence.absences(id);
    return this.requestService.put(endpoint);
  }
}
