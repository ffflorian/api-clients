import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, Routing} from '../interfaces/';
import {APIBase} from './APIBase';

export class RoutingAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Routing> {
    const endpoint = Endpoint.routing(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Routing[]> {
    const endpoint = Endpoint.routing();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
