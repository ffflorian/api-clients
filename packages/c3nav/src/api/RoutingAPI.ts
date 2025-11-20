import {Endpoint} from '../Endpoints';
import type {ClientOptions, Routing} from '../interfaces/';
import {APIBase} from './APIBase';

export class RoutingAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Routing> {
    const endpoint = Endpoint.routing(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve routing with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Routing[]> {
    const endpoint = Endpoint.routing();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve routings: ${response.statusText}`);
    }
    return response.json();
  }
}
