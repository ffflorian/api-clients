import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {RequestOptions} from '../interfaces/Request';
import {Incidents} from '../interfaces/Result';

export class IncidentsAPI {
  private readonly apiClient: APIClient<RequestOptions>;

  constructor(apiClient: APIClient<RequestOptions>) {
    this.apiClient = apiClient;
  }

  /**
   * Get a list of the 50 most recent incidents. This includes all unresolved
   * incidents as described above, as well as those in the *Resolved* and *Postmortem* state.
   */
  public getAll(): Promise<Incidents> {
    const endpoint = Endpoint.Incidents.all();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Get a list of any unresolved incidents. This endpoint will only return
   * incidents in the *Investigating*, *Identified*, or *Monitoring* state.
   */
  public getUnresolved(): Promise<Incidents> {
    const endpoint = Endpoint.Incidents.unresolved();
    return this.apiClient.requestService.get(endpoint);
  }
}
