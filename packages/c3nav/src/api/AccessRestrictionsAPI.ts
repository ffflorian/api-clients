import type {APIClient} from '@ffflorian/api-client';

import type {AccessRestrictions, ClientOptions} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class AccessRestrictionsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<AccessRestrictions> {
    const endpoint = Endpoint.accessRestrictions(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<AccessRestrictions[]> {
    const endpoint = Endpoint.accessRestrictions();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
