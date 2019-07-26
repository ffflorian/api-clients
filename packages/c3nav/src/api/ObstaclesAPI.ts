import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Obstacles} from '../interfaces/';
import {APIBase} from './APIBase';

export class ObstaclesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Obstacles> {
    const endpoint = Endpoint.obstacles(id);
    return this.apiClient.requestService.get(endpoint);
  }

  public getList(): Promise<Obstacles[]> {
    const endpoint = Endpoint.obstacles();
    return this.apiClient.requestService.get(endpoint);
  }
}
