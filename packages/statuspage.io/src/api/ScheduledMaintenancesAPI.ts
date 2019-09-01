import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ScheduledMaintenances} from '../interfaces/Result';

export class ScheduledMaintenancesAPI {
  private readonly apiClient: AxiosInstance;

  constructor(requestService: AxiosInstance) {
    this.apiClient = requestService;
  }

  /**
   * Get a list of any active maintenances. This endpoint will only return
   * scheduled maintenances in the *In Progress* or *Verifying* state.
   */
  public async getActive(): Promise<ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Get a list of the 50 most recent scheduled maintenances. This includes
   * scheduled maintenances as described in the above two endpoints, as well
   * as those in the *Completed* state.
   */
  public async getAll(): Promise<ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Get a list of any upcoming maintenances. This endpoint will only return
   * scheduled maintenances still in the *Scheduled* state.
   */
  public async getUpcoming(): Promise<ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
