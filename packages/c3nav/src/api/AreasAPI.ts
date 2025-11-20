import {Endpoint} from '../Endpoints';
import type {Areas, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AreasAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Areas> {
    const endpoint = Endpoint.areas(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve area with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Areas[]> {
    const endpoint = Endpoint.areas();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve areas: ${response.statusText}`);
    }
    return response.json();
  }
}
