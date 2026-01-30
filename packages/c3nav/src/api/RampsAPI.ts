import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Ramps} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class RampsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Ramps> {
    const endpoint = Endpoint.ramps(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Ramps[]> {
    const endpoint = Endpoint.ramps();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
