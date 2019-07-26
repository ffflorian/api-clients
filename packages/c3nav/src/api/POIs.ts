import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, POIs} from '../interfaces';
import {APIBase} from './APIBase';

export class PoisAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<POIs> {
    const endpoint = Endpoint.pois(id);
    return this.apiClient.requestService.get(endpoint);
  }

  public getList(): Promise<POIs[]> {
    const endpoint = Endpoint.pois();
    return this.apiClient.requestService.get(endpoint);
  }
}
