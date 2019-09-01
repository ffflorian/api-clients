import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Holes} from '../interfaces/';
import {APIBase} from './APIBase';

export class HolesAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Holes> {
    const endpoint = Endpoint.holes(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Holes[]> {
    const endpoint = Endpoint.holes();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
