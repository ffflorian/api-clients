import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {Buildings, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class BuildingsAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Buildings> {
    const endpoint = Endpoint.buildings(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Buildings[]> {
    const endpoint = Endpoint.buildings();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
