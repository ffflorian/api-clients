import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, LineObstacles} from '../interfaces/';
import {APIBase} from './APIBase';

export class LineObstaclesAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LineObstacles> {
    const endpoint = Endpoint.lineObstacles(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<LineObstacles[]> {
    const endpoint = Endpoint.lineObstacles();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
