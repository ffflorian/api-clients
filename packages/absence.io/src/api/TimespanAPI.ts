import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, NewTimespan, Paginated, PaginationOptions, Timespan} from '../interfaces/';
import {APIBase} from './APIBase';

export class TimespanAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Creates a new time entry
   * @param data The time entry data
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#eb82f188-4af9-462a-80f6-0536c40a77d9
   */
  public createTimespan(data: NewTimespan): Promise<Timespan> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.create();
    return this.apiClient.requestService.post(endpoint, {data});
  }

  /**
   * Deletes one time entry
   * @param id The time entry id
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#030e6fd3-051f-4c14-ae14-b5290a9335d8
   */
  public deleteTimespan(id: string): Promise<void> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    return this.apiClient.requestService.delete(endpoint);
  }

  /**
   * Retrieve a single time entry
   * @param id The time entry id
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#c9e5f2fc-e478-419b-ac34-071c8e68765f
   */
  public retrieveTimespan(id: string): Promise<Timespan> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Query a list of time entries
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#951d4608-15e7-47b6-90c9-058fa32a64d0
   */
  public retrieveTimespans(options?: PaginationOptions): Promise<Paginated<Timespan[]>> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans();
    return this.apiClient.requestService.post(endpoint, {data: options});
  }

  /**
   * Creates a new time entry
   * @param id The time entry id
   * @param data The time entry data
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#0b409cc6-37a7-4f24-b1a1-e7bacc5b2555
   */
  public updateTimespan(id: string, data: Partial<NewTimespan>): Promise<Timespan> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    return this.apiClient.requestService.put(endpoint, {data});
  }
}
