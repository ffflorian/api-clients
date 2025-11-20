import {Endpoint} from '../Endpoints';
import type {ClientOptions, Updates} from '../interfaces/';
import {APIBase} from './APIBase';

export class UpdatesAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Updates> {
    const endpoint = Endpoint.updates(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve update with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Updates[]> {
    const endpoint = Endpoint.updates();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve updates: ${response.statusText}`);
    }
    return response.json();
  }
}
