import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Columns} from '../interfaces/';
import {APIBase} from './APIBase';

export class ColumnsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Columns> {
    const endpoint = Endpoint.columns(id);
    return this.apiClient.requestService.get(endpoint);
  }

  public getList(): Promise<Columns[]> {
    const endpoint = Endpoint.columns();
    return this.apiClient.requestService.get(endpoint);
  }
}
