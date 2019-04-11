import {ClientOptions} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Allowance, Authorization, Paginated, PaginationOptions, RequestOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AllowanceTypeAPI extends APIBase<RequestOptions> {
  constructor(config: ClientOptions<RequestOptions>, auth: Authorization) {
    super(config, auth);
  }

  /**
   * Retrieve a single allowance type
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#ae42d612-c1ae-52da-0804-3fe77ba1a6fe
   */
  public retrieveAllowanceType(id: string): Promise<Allowance> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes(id);
    return this.get(endpoint);
  }

  /**
   * Retrieve allowance types
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#ddea0e36-bd15-1ed0-0b56-bd4c480d7cce
   */
  public retrieveAllowanceTypes(options?: PaginationOptions): Promise<Paginated<Allowance[]>> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes();
    return this.post(endpoint, {data: options});
  }
}
