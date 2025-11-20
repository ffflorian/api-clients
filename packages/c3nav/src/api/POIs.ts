import {Endpoint} from '../Endpoints';
import type {ClientOptions, POIs} from '../interfaces';
import {APIBase} from './APIBase';

export class PoisAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<POIs> {
    const endpoint = Endpoint.pois(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve POI with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<POIs[]> {
    const endpoint = Endpoint.pois();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve POIs: ${response.statusText}`);
    }
    return response.json();
  }
}
