import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, LocationGroupCategories} from '../interfaces/';
import {APIBase} from './APIBase';

export class LocationGroupCategoriesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<LocationGroupCategories> {
    const endpoint = Endpoint.locationGroupCategories(id);
    return this.apiClient.requestService.get(endpoint);
  }

  public getList(): Promise<LocationGroupCategories[]> {
    const endpoint = Endpoint.locationGroupCategories();
    return this.apiClient.requestService.get(endpoint);
  }
}
