import {Endpoint} from '../Endpoints';
import type {Buildings, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class BuildingsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Buildings> {
    const endpoint = Endpoint.buildings(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve building with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Buildings[]> {
    const endpoint = Endpoint.buildings();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve buildings: ${response.statusText}`);
    }
    return response.json();
  }
}
