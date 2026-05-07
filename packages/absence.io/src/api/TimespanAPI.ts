import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, NewTimespan, Paginated, PaginationOptions, Timespan} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class TimespanAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Creates a new time entry
   * @param timestampData The time entry data
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
   */
  public async deleteTimespan(id: string): Promise<void> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    await this.apiClient.delete(endpoint);
  }

  /**
   * Retrieve a single time entry
   * @param id The time entry id
   */
  public async retrieveTimespan(id: string): Promise<Timespan> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    const {data: timespan} = await this.apiClient.get(endpoint);
    return timespan;
  }

  /**
   * Query a list of time entries
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
   */
  public async updateTimespan(id: string, newTimespanData: Partial<NewTimespan>): Promise<Timespan> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    const {data: timespan} = await this.apiClient.put(endpoint, newTimespanData);
    return timespan;
  }
}
