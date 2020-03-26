import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, POIs} from '../interfaces';
import {APIBase} from './APIBase';

export class PoisAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<POIs> {
    const endpoint = Endpoint.pois(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<POIs[]> {
    const endpoint = Endpoint.pois();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
