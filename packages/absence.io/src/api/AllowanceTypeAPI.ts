import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {Allowance, ClientOptions, Paginated, PaginationOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AllowanceTypeAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single allowance type
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#ae42d612-c1ae-52da-0804-3fe77ba1a6fe
   */
  public async retrieveAllowanceType(id: string): Promise<Allowance> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes(id);
    const {data: allowance} = await this.apiClient.get<Allowance>(endpoint);
    return allowance;
  }

  /**
   * Retrieve allowance types
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#ddea0e36-bd15-1ed0-0b56-bd4c480d7cce
   */
  public async retrieveAllowanceTypes(options?: PaginationOptions): Promise<Paginated<Allowance[]>> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes();
    const {data: allowances} = await this.apiClient.post<Paginated<Allowance[]>>(endpoint, {data: options});
    return allowances;
  }
}
