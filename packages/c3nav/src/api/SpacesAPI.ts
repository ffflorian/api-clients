import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Spaces} from '../interfaces/';
import {APIBase} from './APIBase';

export class SpacesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Spaces[]> {
    const endpoint = Endpoint.spaces();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Spaces> {
    const endpoint = Endpoint.spaces(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
