import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, LocationGroups} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class LocationGroupsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LocationGroups> {
    const endpoint = Endpoint.locationGroups(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<LocationGroups[]> {
    const endpoint = Endpoint.locationGroups();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
