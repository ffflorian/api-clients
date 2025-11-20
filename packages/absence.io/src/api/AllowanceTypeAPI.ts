import {Endpoint} from '../Endpoints';
import type {Allowance, ClientOptions, Paginated, PaginationOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class AllowanceTypeAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * Retrieve a single allowance type
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#ae42d612-c1ae-52da-0804-3fe77ba1a6fe
   */
  public async retrieveAllowanceType(id: string): Promise<Allowance> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve allowance type with id ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve allowance types
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#ddea0e36-bd15-1ed0-0b56-bd4c480d7cce
   */
  public async retrieveAllowanceTypes(options?: PaginationOptions): Promise<Paginated<Allowance[]>> {
    this.checkApiKey('AllowanceType');
    const endpoint = Endpoint.AllowanceType.allowanceTypes();
    const response = await fetch(endpoint, {body: JSON.stringify(options), method: 'POST'});
    if (!response.ok) {
      throw new Error(`Failed to retrieve allowance types: ${response.statusText}`);
    }
    return response.json();
  }
}
