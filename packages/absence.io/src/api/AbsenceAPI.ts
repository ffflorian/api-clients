import {Endpoint} from '../Endpoints';
import type {Absence, ClientOptions, NewAbsence, Paginated, PaginationOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AbsenceAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * Create absences
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#f7548ccc-b114-46f8-493c-dc86b659dbbc
   */
  public async createAbsence(absenceData: NewAbsence): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.create();
    const response = await fetch(endpoint, {body: JSON.stringify(absenceData), method: 'POST'});
    if (!response.ok) {
      throw new Error(`Failed to create absence: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve an absence
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#191890ad-7f0d-3c2d-11d8-ed91e6193944
   */
  public async retrieveAbsence(id: string): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve absence with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve absences
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#72b55ac7-c4bc-30dc-8cd8-6ac1e15f2639
   */
  public async retrieveAbsences(options?: PaginationOptions): Promise<Paginated<Absence[]>> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences();
    const response = await fetch(endpoint, {body: JSON.stringify(options), method: 'POST'});
    if (!response.ok) {
      throw new Error(`Failed to retrieve absences: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Update an existing absence
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#f6f7f6a0-4520-f550-6132-610076d58a91
   */
  public async updateAbsence(id: string, absenceData: Partial<Absence>): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    const response = await fetch(endpoint, {body: JSON.stringify(absenceData), method: 'PUT'});
    if (!response.ok) {
      throw new Error(`Failed to update absence with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }
}
