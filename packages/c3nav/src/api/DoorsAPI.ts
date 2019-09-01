import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Doors} from '../interfaces/';
import {APIBase} from './APIBase';

export class DoorsAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Doors> {
    const endpoint = Endpoint.doors(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Doors[]> {
    const endpoint = Endpoint.doors();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
