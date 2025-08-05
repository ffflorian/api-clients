import {Endpoint} from '../Endpoints';
import type {ScheduledMaintenances} from '../interfaces/Result';

export class ScheduledMaintenancesAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * Get a list of any active maintenances. This endpoint will only return
   * scheduled maintenances in the *In Progress* or *Verifying* state.
   */
  public async getActive(): Promise<ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Get a list of the 50 most recent scheduled maintenances. This includes
   * scheduled maintenances as described in the above two endpoints, as well
   * as those in the *Completed* state.
   */
  public async getAll(): Promise<ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Get a list of any upcoming maintenances. This endpoint will only return
   * scheduled maintenances still in the *Scheduled* state.
   */
  public async getUpcoming(): Promise<ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }
}
