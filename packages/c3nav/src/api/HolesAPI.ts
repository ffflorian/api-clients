import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Holes} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class HolesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Holes> {
    const endpoint = Endpoint.holes(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Holes[]> {
    const endpoint = Endpoint.holes();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
