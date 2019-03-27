import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class TimespanAPI extends APIBase {
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
   * Retrieve a single time entry
   * @param id The time entry id
   */
  public retrieveTimespan(id: string): Promise<any> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans(id);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Query a list of time entries
   */
  public retrieveTimespans(): Promise<any> {
    this.checkApiKey('Timespan');
    const endpoint = Endpoint.Timespan.timespans();
    return this.apiClient.requestService.post(endpoint, {});
  }
}
