import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Stairs} from '../interfaces/';
import {APIBase} from './APIBase';

export class StairsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Stairs> {
    const endpoint = Endpoint.stairs(id);
    return this.apiClient.requestService.get(endpoint);
  }

  public getList(): Promise<Stairs[]> {
    const endpoint = Endpoint.stairs();
    return this.apiClient.requestService.get(endpoint);
  }
}
