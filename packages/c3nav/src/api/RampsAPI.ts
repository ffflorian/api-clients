import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Ramps} from '../interfaces/';
import {APIBase} from './APIBase';

export class RampsAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Ramps> {
    const endpoint = Endpoint.ramps(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Ramps[]> {
    const endpoint = Endpoint.ramps();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
