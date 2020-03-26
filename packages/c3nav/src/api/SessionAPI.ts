import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, Session} from '../interfaces/';
import {APIBase} from './APIBase';

export class SessionAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Session> {
    const endpoint = Endpoint.session(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Session[]> {
    const endpoint = Endpoint.session();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
