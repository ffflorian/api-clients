import {Endpoint} from '../Endpoints';
import type {AccessRestrictionGroups, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AccessRestrictionGroupsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<AccessRestrictionGroups> {
    const endpoint = Endpoint.accessRestrictionGroups(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve access restriction group with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<AccessRestrictionGroups[]> {
    const endpoint = Endpoint.accessRestrictionGroups();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve access restriction groups: ${response.statusText}`);
    }
    return response.json();
  }
}
