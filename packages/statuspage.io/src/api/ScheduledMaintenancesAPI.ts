import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {RequestOptions} from '../interfaces/Request';
import {ScheduledMaintenances} from '../interfaces/Result';

export class ScheduledMaintenancesAPI {
  private readonly apiClient: APIClient<RequestOptions>;

  constructor(requestService: APIClient<RequestOptions>) {
    this.apiClient = requestService;
  }

  /**
   * Get a list of any active maintenances. This endpoint will only return
   * scheduled maintenances in the *In Progress* or *Verifying* state.
   */
  public getActive(): Promise<ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Get a list of the 50 most recent scheduled maintenances. This includes
   * scheduled maintenances as described in the above two endpoints, as well
   * as those in the *Completed* state.
   */
  public getAll(): Promise<ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Get a list of any upcoming maintenances. This endpoint will only return
   * scheduled maintenances still in the *Scheduled* state.
   */
  public getUpcoming(): Promise<ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    return this.apiClient.requestService.get(endpoint);
  }
}
