import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Session} from '../interfaces/';
import {APIBase} from './APIBase';

export class SessionAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Session[]> {
    const endpoint = Endpoint.session();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Session> {
    const endpoint = Endpoint.session(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
