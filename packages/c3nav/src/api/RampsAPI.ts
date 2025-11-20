import {Endpoint} from '../Endpoints';
import type {ClientOptions, Ramps} from '../interfaces/';
import {APIBase} from './APIBase';

export class RampsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Ramps> {
    const endpoint = Endpoint.ramps(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve ramp with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Ramps[]> {
    const endpoint = Endpoint.ramps();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve ramps: ${response.statusText}`);
    }
    return response.json();
  }
}
