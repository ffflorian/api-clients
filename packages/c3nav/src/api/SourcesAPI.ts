import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, Sources} from '../interfaces/';
import {APIBase} from './APIBase';

export class SourcesAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Sources> {
    const endpoint = Endpoint.sources(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Sources[]> {
    const endpoint = Endpoint.sources();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
