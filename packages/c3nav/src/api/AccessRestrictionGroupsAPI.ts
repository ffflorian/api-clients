import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {AccessRestrictionGroups, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AccessRestrictionGroupsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<AccessRestrictionGroups> {
    const endpoint = Endpoint.accessRestrictionGroups(id);
    return this.apiClient.requestService.get(endpoint);
  }

  public getList(): Promise<AccessRestrictionGroups[]> {
    const endpoint = Endpoint.accessRestrictionGroups();
    return this.apiClient.requestService.get(endpoint);
  }
}
