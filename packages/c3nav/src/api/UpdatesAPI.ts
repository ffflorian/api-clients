import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Updates} from '../interfaces/';
import {APIBase} from './APIBase';

export class UpdatesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Updates[]> {
    const endpoint = Endpoint.updates();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Updates> {
    const endpoint = Endpoint.updates(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
