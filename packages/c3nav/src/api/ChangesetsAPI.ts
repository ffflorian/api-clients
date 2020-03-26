import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {Changesets, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class ChangesetsAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Changesets> {
    const endpoint = Endpoint.changesets(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Changesets[]> {
    const endpoint = Endpoint.changesets();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
