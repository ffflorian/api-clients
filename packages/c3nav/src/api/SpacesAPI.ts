import {Endpoint} from '../Endpoints';
import type {ClientOptions, Spaces} from '../interfaces/';
import {APIBase} from './APIBase';

export class SpacesAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Spaces> {
    const endpoint = Endpoint.spaces(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve space with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Spaces[]> {
    const endpoint = Endpoint.spaces();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve spaces: ${response.statusText}`);
    }
    return response.json();
  }
}
