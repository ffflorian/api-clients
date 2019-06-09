import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Holes} from '../interfaces/';
import {APIBase} from './APIBase';

export class HolesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Holes[]> {
    const endpoint = Endpoint.holes();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Holes> {
    const endpoint = Endpoint.holes(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
