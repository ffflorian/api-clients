import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Spaces} from '../interfaces/';
import {APIBase} from './APIBase';

export class SpacesAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Spaces> {
    const endpoint = Endpoint.spaces(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Spaces[]> {
    const endpoint = Endpoint.spaces();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
