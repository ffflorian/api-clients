import {Endpoint} from '../Endpoints';
import type {ClientOptions, Stairs} from '../interfaces/';
import {APIBase} from './APIBase';

export class StairsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Stairs> {
    const endpoint = Endpoint.stairs(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve stairs with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Stairs[]> {
    const endpoint = Endpoint.stairs();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve stairs: ${response.statusText}`);
    }
    return response.json();
  }
}
