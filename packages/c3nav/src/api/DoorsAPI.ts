import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Doors} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class DoorsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Doors> {
    const endpoint = Endpoint.doors(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Doors[]> {
    const endpoint = Endpoint.doors();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
