import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Sources} from '../interfaces/';
import {APIBase} from './APIBase';

export class SourcesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Sources[]> {
    const endpoint = Endpoint.sources();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Sources> {
    const endpoint = Endpoint.sources(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
