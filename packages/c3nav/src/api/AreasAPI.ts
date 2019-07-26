import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Areas, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AreasAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Areas> {
    const endpoint = Endpoint.areas(id);
    return this.apiClient.requestService.get(endpoint);
  }

  public getList(): Promise<Areas[]> {
    const endpoint = Endpoint.areas();
    return this.apiClient.requestService.get(endpoint);
  }
}
