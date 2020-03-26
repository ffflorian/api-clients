import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, Obstacles} from '../interfaces/';
import {APIBase} from './APIBase';

export class ObstaclesAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Obstacles> {
    const endpoint = Endpoint.obstacles(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Obstacles[]> {
    const endpoint = Endpoint.obstacles();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
