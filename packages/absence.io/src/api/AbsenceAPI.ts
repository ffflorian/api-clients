import type {APIClient} from '@ffflorian/api-client';

import type {Absence, ClientOptions, NewAbsence, Paginated, PaginationOptions} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class AbsenceAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Create absences
   */
  public async createAbsence(absenceData: NewAbsence): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.create();
    const {data: absence} = await this.apiClient.post<Absence>(endpoint, absenceData);
    return absence;
  }

  /**
   * Deletes one absence
   * @param id The absence id
   */
  public async deleteAbsence(id: string): Promise<void> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    await this.apiClient.delete(endpoint);
  }

  /**
   * Retrieve an absence
   */
  public async retrieveAbsence(id: string): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    const {data: absence} = await this.apiClient.get<Absence>(endpoint);
    return absence;
  }

  /**
   * Retrieve absences
   */
  public async retrieveAbsences(options?: PaginationOptions): Promise<Paginated<Absence[]>> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences();
    const {data: absences} = await this.apiClient.post<Paginated<Absence[]>>(endpoint, options);
    return absences;
  }

  /**
   * Update an existing absence
   */
  public async updateAbsence(id: string, absenceData: Partial<Absence>): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    const {data} = await this.apiClient.put<Absence>(endpoint, absenceData);
    return data;
  }
}
