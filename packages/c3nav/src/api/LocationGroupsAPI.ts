import {Endpoint} from '../Endpoints';
import type {ClientOptions, LocationGroups} from '../interfaces/';
import {APIBase} from './APIBase';

export class LocationGroupsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LocationGroups> {
    const endpoint = Endpoint.locationGroups(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve location group with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<LocationGroups[]> {
    const endpoint = Endpoint.locationGroups();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve location groups: ${response.statusText}`);
    }
    return response.json();
  }
}
