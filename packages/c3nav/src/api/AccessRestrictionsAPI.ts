import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../Endpoints';
import {AccessRestrictions, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AccessRestrictionsAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<AccessRestrictions[]> {
    const endpoint = Endpoint.accessRestrictions();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<AccessRestrictions> {
    const endpoint = Endpoint.accessRestrictions(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
