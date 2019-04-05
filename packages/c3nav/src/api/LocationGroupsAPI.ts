import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../Endpoints';
import {ClientOptions, LocationGroups} from '../interfaces/';
import {APIBase} from './APIBase';

export class LocationGroupsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<LocationGroups[]> {
    const endpoint = Endpoint.locationGroups();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<LocationGroups> {
    const endpoint = Endpoint.locationGroups(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
