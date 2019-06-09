import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Doors} from '../interfaces/';
import {APIBase} from './APIBase';

export class DoorsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Doors[]> {
    const endpoint = Endpoint.doors();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Doors> {
    const endpoint = Endpoint.doors(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
