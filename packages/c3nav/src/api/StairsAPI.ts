import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, Stairs} from '../interfaces/';
import {APIBase} from './APIBase';

export class StairsAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Stairs> {
    const endpoint = Endpoint.stairs(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Stairs[]> {
    const endpoint = Endpoint.stairs();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
