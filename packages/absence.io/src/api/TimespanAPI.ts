import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, NewTimespan, Paginated, PaginationOptions, Timespan} from '../interfaces/';
import {APIBase} from './APIBase';

export class TimespanAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Creates a new time entry
   * @param timestampData The time entry data
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#eb82f188-4af9-462a-80f6-0536c40a77d9
   */
  public async createTimespan(timestampData: NewTimespan): Promise<Timespan> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.create();
    const {data: timespan} = await this.apiClient.post(endpoint, timestampData);
    return timespan;
  }

  /**
   * Deletes one time entry
   * @param id The time entry id
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#030e6fd3-051f-4c14-ae14-b5290a9335d8
   */
  public async deleteTimespan(id: string): Promise<void> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    await this.apiClient.delete(endpoint);
  }

  /**
   * Retrieve a single time entry
   * @param id The time entry id
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#c9e5f2fc-e478-419b-ac34-071c8e68765f
   */
  public async retrieveTimespan(id: string): Promise<Timespan> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    const {data: timespan} = await this.apiClient.get(endpoint);
    return timespan;
  }

  /**
   * Query a list of time entries
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#951d4608-15e7-47b6-90c9-058fa32a64d0
   */
  public async retrieveTimespans(options?: PaginationOptions): Promise<Paginated<Timespan[]>> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans();
    const {data} = await this.apiClient.post(endpoint, options);
    return data;
  }

  /**
   * Creates a new time entry
   * @param id The time entry id
   * @param newTimespanData The time entry data
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#0b409cc6-37a7-4f24-b1a1-e7bacc5b2555
   */
  public async updateTimespan(id: string, newTimespanData: Partial<NewTimespan>): Promise<Timespan> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    const {data: timespan} = await this.apiClient.put(endpoint, newTimespanData);
    return timespan;
  }
}
