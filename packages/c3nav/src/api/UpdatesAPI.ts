import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Updates} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class UpdatesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Updates> {
    const endpoint = Endpoint.updates(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Updates[]> {
    const endpoint = Endpoint.updates();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
