import {Endpoint} from '../Endpoints';
import type {AccessRestrictions, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AccessRestrictionsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<AccessRestrictions> {
    const endpoint = Endpoint.accessRestrictions(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve access restriction with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<AccessRestrictions[]> {
    const endpoint = Endpoint.accessRestrictions();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve access restrictions: ${response.statusText}`);
    }
    return response.json();
  }
}
