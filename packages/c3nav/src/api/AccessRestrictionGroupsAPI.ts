import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {AccessRestrictionGroups, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AccessRestrictionGroupsAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<AccessRestrictionGroups> {
    const endpoint = Endpoint.accessRestrictionGroups(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<AccessRestrictionGroups[]> {
    const endpoint = Endpoint.accessRestrictionGroups();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
