import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {Areas, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AreasAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Areas> {
    const endpoint = Endpoint.areas(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Areas[]> {
    const endpoint = Endpoint.areas();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
