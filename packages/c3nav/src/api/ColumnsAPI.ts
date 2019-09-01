import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Columns} from '../interfaces/';
import {APIBase} from './APIBase';

export class ColumnsAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
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
