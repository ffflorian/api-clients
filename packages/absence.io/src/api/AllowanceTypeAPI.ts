import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AllowanceTypeAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single allowance type
   */
  public retrieveAllowanceType(id: string): Promise<any> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes(id);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Retrieve allowance types
   */
  public retrieveAllowanceTypes(): Promise<any> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes();
    return this.apiClient.requestService.post(endpoint, {});
  }
}
