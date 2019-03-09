import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AbsenceAPI extends APIBase {
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
   * Create absences
   */
  public createAbsence(): Promise<any> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.create();
    return this.apiClient.requestService.post(endpoint);
  }

  /**
   * Retrieve an absence
   */
  public retrieveAbsence(id: string): Promise<any> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    return this.apiClient.requestService.post(endpoint);
  }

  /**
   * Retrieve absences
   */
  public retrieveAbsences(): Promise<any> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences();
    return this.apiClient.requestService.post(endpoint);
  }

  /**
   * Update an existing absence
   */
  public updateAbsence(id: string): Promise<any> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    return this.apiClient.requestService.put(endpoint);
  }
}
