import {Endpoint} from '../Endpoints';
import type {ClientOptions, LeaveDescriptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class LeaveDescriptionsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LeaveDescriptions> {
    const endpoint = Endpoint.leaveDescriptions(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve leave description with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<LeaveDescriptions[]> {
    const endpoint = Endpoint.leaveDescriptions();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve leave descriptions: ${response.statusText}`);
    }
    return response.json();
  }
}
