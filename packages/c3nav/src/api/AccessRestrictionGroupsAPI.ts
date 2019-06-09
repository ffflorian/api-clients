import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {AccessRestrictionGroups, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AccessRestrictionGroupsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<AccessRestrictionGroups[]> {
    const endpoint = Endpoint.accessRestrictionGroups();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<AccessRestrictionGroups> {
    const endpoint = Endpoint.accessRestrictionGroups(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
