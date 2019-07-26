import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Buildings, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class BuildingsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Buildings> {
    const endpoint = Endpoint.buildings(id);
    return this.apiClient.requestService.get(endpoint);
  }

  public getList(): Promise<Buildings[]> {
    const endpoint = Endpoint.buildings();
    return this.apiClient.requestService.get(endpoint);
  }
}
