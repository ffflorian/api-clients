import {Endpoint} from '../Endpoints';
import {Result} from '../Interfaces';
import {RequestService} from '../RequestService';

export class ScheduledMaintenancesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /**
   * Get a list of any active maintenances. This endpoint will only return
   * scheduled maintenances in the *In Progress* or *Verifying* state.
   */
  public getActive(): Promise<Result.ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    return this.requestService.get(endpoint);
  }

  /**
   * Get a list of the 50 most recent scheduled maintenances. This includes
   * scheduled maintenances as described in the above two endpoints, as well
   * as those in the *Completed* state.
   */
  public getAll(): Promise<Result.ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    return this.requestService.get(endpoint);
  }

  /**
   * Get a list of any upcoming maintenances. This endpoint will only return
   * scheduled maintenances still in the *Scheduled* state.
   */
  public getUpcoming(): Promise<Result.ScheduledMaintenances> {
    const endpoint = Endpoint.ScheduledMaintenances.upcoming();
    return this.requestService.get(endpoint);
  }
}
