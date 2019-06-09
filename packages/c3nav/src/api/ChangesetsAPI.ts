import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Changesets, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class ChangesetsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Changesets[]> {
    const endpoint = Endpoint.changesets();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Changesets> {
    const endpoint = Endpoint.changesets(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
