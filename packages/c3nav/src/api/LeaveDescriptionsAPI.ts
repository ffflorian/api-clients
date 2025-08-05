import {Endpoint} from '../Endpoints';
import type {LeaveDescriptions} from '../interfaces/';

export class LeaveDescriptionsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LeaveDescriptions> {
    const endpoint = Endpoint.leaveDescriptions(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<LeaveDescriptions[]> {
    const endpoint = Endpoint.leaveDescriptions();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
