import {Endpoint} from '../Endpoints';
import type {Incidents} from '../interfaces/Result';

export class IncidentsAPI {
  constructor(private readonly baseURL: string) {
  }

  /**
   * Get a list of the 50 most recent incidents. This includes all unresolved
   * incidents as described above, as well as those in the *Resolved* and *Postmortem* state.
   */
  public async getAll(): Promise<Incidents> {
    const endpoint = Endpoint.Incidents.all();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Get a list of any unresolved incidents. This endpoint will only return
   * incidents in the *Investigating*, *Identified*, or *Monitoring* state.
   */
  public async getUnresolved(): Promise<Incidents> {
    const endpoint = Endpoint.Incidents.unresolved();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
