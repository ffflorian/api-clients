import {Endpoint} from '../Endpoints';
import type {AccessRestrictionGroups} from '../interfaces/';

export class AccessRestrictionGroupsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<AccessRestrictionGroups> {
    const endpoint = Endpoint.accessRestrictionGroups(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<AccessRestrictionGroups[]> {
    const endpoint = Endpoint.accessRestrictionGroups();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
