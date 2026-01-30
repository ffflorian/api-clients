import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, LineObstacles} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class LineObstaclesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
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
