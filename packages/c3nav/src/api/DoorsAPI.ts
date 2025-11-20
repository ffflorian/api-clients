import {Endpoint} from '../Endpoints';
import type {ClientOptions, Doors} from '../interfaces/';
import {APIBase} from './APIBase';

export class DoorsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Doors> {
    const endpoint = Endpoint.doors(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve door with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Doors[]> {
    const endpoint = Endpoint.doors();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve doors: ${response.statusText}`);
    }
    return response.json();
  }
}
