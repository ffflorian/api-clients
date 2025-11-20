import {Endpoint} from '../Endpoints';
import type {ClientOptions, Holes} from '../interfaces/';
import {APIBase} from './APIBase';

export class HolesAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The ID to get
   */
  public async getById(id: number): Promise<Holes> {
    const endpoint = Endpoint.holes(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve hole with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Holes[]> {
    const endpoint = Endpoint.holes();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve holes: ${response.statusText}`);
    }
    return response.json();
  }
}
