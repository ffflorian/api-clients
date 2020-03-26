import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {Incidents} from '../interfaces/Result';

export class IncidentsAPI {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * Get a list of the 50 most recent incidents. This includes all unresolved
   * incidents as described above, as well as those in the *Resolved* and *Postmortem* state.
   */
  public async getAll(): Promise<Incidents> {
    const endpoint = Endpoint.Incidents.all();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Get a list of any unresolved incidents. This endpoint will only return
   * incidents in the *Investigating*, *Identified*, or *Monitoring* state.
   */
  public async getUnresolved(): Promise<Incidents> {
    const endpoint = Endpoint.Incidents.unresolved();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
