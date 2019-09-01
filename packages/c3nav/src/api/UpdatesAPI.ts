import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Updates} from '../interfaces/';
import {APIBase} from './APIBase';

export class UpdatesAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Updates> {
    const endpoint = Endpoint.updates(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Updates[]> {
    const endpoint = Endpoint.updates();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
