import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Ramps} from '../interfaces/';
import {APIBase} from './APIBase';

export class RampsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Ramps[]> {
    const endpoint = Endpoint.ramps();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Ramps> {
    const endpoint = Endpoint.ramps(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
