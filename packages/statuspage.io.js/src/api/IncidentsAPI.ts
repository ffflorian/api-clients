import {Endpoint} from '../Endpoints';
import {Result} from '../Interfaces';
import {RequestService} from '../RequestService';

export class IncidentsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /**
   * Get a list of the 50 most recent incidents. This includes all unresolved
   * incidents as described above, as well as those in the *Resolved* and *Postmortem* state.
   */
  public getAll(): Promise<Result.Incidents> {
    const endpoint = Endpoint.Incidents.all();
    return this.requestService.get(endpoint);
  }

  /**
   * Get a list of any unresolved incidents. This endpoint will only return
   * incidents in the *Investigating*, *Identified*, or *Monitoring* state.
   */
  public getUnresolved(): Promise<Result.Incidents> {
    const endpoint = Endpoint.Incidents.unresolved();
    return this.requestService.get(endpoint);
  }
}
