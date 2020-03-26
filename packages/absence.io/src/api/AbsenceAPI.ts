import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {Absence, ClientOptions, NewAbsence, Paginated, PaginationOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AbsenceAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Create absences
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#f7548ccc-b114-46f8-493c-dc86b659dbbc
   */
  public async createAbsence(absenceData: NewAbsence): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.create();
    const {data: absence} = await this.apiClient.post<Absence>(endpoint, absenceData);
    return absence;
  }

  /**
   * Retrieve an absence
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#191890ad-7f0d-3c2d-11d8-ed91e6193944
   */
  public async retrieveAbsence(id: string): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    const {data: absence} = await this.apiClient.get<Absence>(endpoint);
    return absence;
  }

  /**
   * Retrieve absences
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#72b55ac7-c4bc-30dc-8cd8-6ac1e15f2639
   */
  public async retrieveAbsences(options?: PaginationOptions): Promise<Paginated<Absence[]>> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences();
    const {data: absences} = await this.apiClient.post<Paginated<Absence[]>>(endpoint, options);
    return absences;
  }

  /**
   * Update an existing absence
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#f6f7f6a0-4520-f550-6132-610076d58a91
   */
  public async updateAbsence(id: string, absenceData: Partial<Absence>): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    const {data} = await this.apiClient.put<Absence>(endpoint, absenceData);
    return data;
  }
}
