import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, LocationGroupCategories} from '../interfaces/';
import {APIBase} from './APIBase';

export class LocationGroupCategoriesAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LocationGroupCategories> {
    const endpoint = Endpoint.locationGroupCategories(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<LocationGroupCategories[]> {
    const endpoint = Endpoint.locationGroupCategories();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
