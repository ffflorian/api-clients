import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Absence, ClientOptions, NewAbsence, Paginated, PaginationOptions} from '../interfaces/';
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
  public createAbsence(absenceData: NewAbsence): Promise<void> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.create();
    return this.apiClient.requestService.post(endpoint, {data: absenceData});
  }

  /**
   * Retrieve an absence
   */
  public retrieveAbsence(id: string): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    return this.apiClient.requestService.post(endpoint);
  }

  /**
   * Retrieve absences
   */
  public retrieveAbsences(options?: PaginationOptions): Promise<Paginated<Absence[]>> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences();
    return this.apiClient.requestService.post(endpoint, {data: options});
  }

  /**
   * Update an existing absence
   */
  public updateAbsence(id: string, absenceData: any): Promise<any> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    return this.apiClient.requestService.put(endpoint, {data: absenceData});
  }
}
