import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Absence, ClientOptions, NewAbsence, Paginated, PaginationOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AbsenceAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Create absences
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#f7548ccc-b114-46f8-493c-dc86b659dbbc
   */
  public createAbsence(absenceData: NewAbsence): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.create();
    return this.apiClient.requestService.post<Absence>(endpoint, {data: absenceData});
  }

  /**
   * Retrieve an absence
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#191890ad-7f0d-3c2d-11d8-ed91e6193944
   */
  public retrieveAbsence(id: string): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Retrieve absences
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#72b55ac7-c4bc-30dc-8cd8-6ac1e15f2639
   */
  public retrieveAbsences(options?: PaginationOptions): Promise<Paginated<Absence[]>> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences();
    return this.apiClient.requestService.post(endpoint, {data: options});
  }

  /**
   * Update an existing absence
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#f6f7f6a0-4520-f550-6132-610076d58a91
   */
  public updateAbsence(id: string, absenceData: Partial<Absence>): Promise<Absence> {
    this.checkApiKey('Absence');
    const endpoint = Endpoint.Absence.absences(id);
    return this.apiClient.requestService.put(endpoint, {data: absenceData});
  }
}
