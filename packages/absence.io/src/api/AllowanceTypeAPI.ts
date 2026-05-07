import type {APIClient} from '@ffflorian/api-client';

import type {Allowance, ClientOptions, Paginated, PaginationOptions} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class AllowanceTypeAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single allowance type
   */
  public async retrieveAllowanceType(id: string): Promise<Allowance> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes(id);
    const {data: allowance} = await this.apiClient.get<Allowance>(endpoint);
    return allowance;
  }

  /**
   * Retrieve allowance types
   */
  public async retrieveAllowanceTypes(options?: PaginationOptions): Promise<Paginated<Allowance[]>> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes();
    const {data: allowances} = await this.apiClient.post<Paginated<Allowance[]>>(endpoint, options);
    return allowances;
  }
}
