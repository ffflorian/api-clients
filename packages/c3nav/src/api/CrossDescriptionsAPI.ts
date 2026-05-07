import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, CrossDescriptions} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class CrossDescriptionsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<CrossDescriptions> {
    const endpoint = Endpoint.crossDescriptions(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<CrossDescriptions[]> {
    const endpoint = Endpoint.crossDescriptions();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
