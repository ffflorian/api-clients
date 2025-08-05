import {Endpoint} from '../Endpoints';
import type {AccessRestrictions} from '../interfaces/';

export class AccessRestrictionsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<AccessRestrictions> {
    const endpoint = Endpoint.accessRestrictions(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<AccessRestrictions[]> {
    const endpoint = Endpoint.accessRestrictions();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
