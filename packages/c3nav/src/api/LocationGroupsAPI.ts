import {Endpoint} from '../Endpoints';
import type {LocationGroups} from '../interfaces/';

export class LocationGroupsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LocationGroups> {
    const endpoint = Endpoint.locationGroups(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<LocationGroups[]> {
    const endpoint = Endpoint.locationGroups();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
