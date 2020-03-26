import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, Department, Paginated, PaginationOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class DepartmentAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single department
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#a9c45164-59e5-3daf-93f2-4c64f6cc52f0
   */
  public async retrieveDepartment(id: string): Promise<Department> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments(id);
    const {data: department} = await this.apiClient.get(endpoint);
    return department;
  }

  /**
   * Retrieve departments
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#d596a243-9bc4-cb5f-dbc5-456c46437d09
   */
  public async retrieveDepartments(options?: PaginationOptions): Promise<Paginated<Department[]>> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments();
    const {data: departments} = await this.apiClient.post(endpoint, options);
    return departments;
  }
}
