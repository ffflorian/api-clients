import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {AccessRestrictions, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AccessRestrictionsAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<AccessRestrictions> {
    const endpoint = Endpoint.accessRestrictions(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<AccessRestrictions[]> {
    const endpoint = Endpoint.accessRestrictions();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
