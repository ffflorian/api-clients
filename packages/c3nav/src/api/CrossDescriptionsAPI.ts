import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, CrossDescriptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class CrossDescriptionsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<CrossDescriptions[]> {
    const endpoint = Endpoint.crossDescriptions();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<CrossDescriptions> {
    const endpoint = Endpoint.crossDescriptions(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
