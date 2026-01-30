import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Columns} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class ColumnsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Columns> {
    const endpoint = Endpoint.columns(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Columns[]> {
    const endpoint = Endpoint.columns();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
