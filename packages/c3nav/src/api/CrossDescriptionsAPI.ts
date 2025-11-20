import {Endpoint} from '../Endpoints';
import type {ClientOptions, CrossDescriptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class CrossDescriptionsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<CrossDescriptions> {
    const endpoint = Endpoint.crossDescriptions(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve cross description with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<CrossDescriptions[]> {
    const endpoint = Endpoint.crossDescriptions();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve cross descriptions: ${response.statusText}`);
    }
    return response.json();
  }
}
