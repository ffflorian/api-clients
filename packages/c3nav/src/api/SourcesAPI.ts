import {Endpoint} from '../Endpoints';
import type {ClientOptions, Sources} from '../interfaces/';
import {APIBase} from './APIBase';

export class SourcesAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Sources> {
    const endpoint = Endpoint.sources(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve source with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Sources[]> {
    const endpoint = Endpoint.sources();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve sources: ${response.statusText}`);
    }
    return response.json();
  }
}
