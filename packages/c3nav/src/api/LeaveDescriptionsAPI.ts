import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../Endpoints';
import {ClientOptions, LeaveDescriptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class LeaveDescriptionsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<LeaveDescriptions[]> {
    const endpoint = Endpoint.leaveDescriptions();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<LeaveDescriptions> {
    const endpoint = Endpoint.leaveDescriptions(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
