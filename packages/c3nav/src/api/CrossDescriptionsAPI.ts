import {Endpoint} from '../Endpoints';
import type {CrossDescriptions} from '../interfaces/';

export class CrossDescriptionsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<CrossDescriptions> {
    const endpoint = Endpoint.crossDescriptions(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<CrossDescriptions[]> {
    const endpoint = Endpoint.crossDescriptions();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }
}
