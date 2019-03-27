import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class DepartmentAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single department
   */
  public retrieveDepartment(id: string): Promise<any> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments(id);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Retrieve departments
   */
  public retrieveDepartments(): Promise<any> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments();
    return this.apiClient.requestService.post(endpoint, {});
  }
}
