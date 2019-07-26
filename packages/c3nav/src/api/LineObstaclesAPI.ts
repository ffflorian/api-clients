import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, LineObstacles} from '../interfaces/';
import {APIBase} from './APIBase';

export class LineObstaclesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<LineObstacles> {
    const endpoint = Endpoint.lineObstacles(id);
    return this.apiClient.requestService.get(endpoint);
  }

  public getList(): Promise<LineObstacles[]> {
    const endpoint = Endpoint.lineObstacles();
    return this.apiClient.requestService.get(endpoint);
  }
}
