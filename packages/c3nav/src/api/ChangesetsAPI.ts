import {Endpoint} from '../Endpoints';
import type {Changesets, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class ChangesetsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Changesets> {
    const endpoint = Endpoint.changesets(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve changeset with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Changesets[]> {
    const endpoint = Endpoint.changesets();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve changesets: ${response.statusText}`);
    }
    return response.json();
  }
}
