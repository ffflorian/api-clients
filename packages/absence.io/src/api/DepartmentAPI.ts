import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Department, Paginated, PaginationOptions} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class DepartmentAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Deletes a department
   * @param id The department id
   */
  public async deleteDepartment(id: string): Promise<void> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments(id);
    await this.apiClient.delete(endpoint);
  }

  /**
   * Retrieve a single department
   */
  public async retrieveDepartment(id: string): Promise<Department> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments(id);
    const {data: department} = await this.apiClient.get<Department>(endpoint);
    return department;
  }

  /**
   * Retrieve departments
   */
  public async retrieveDepartments(options?: PaginationOptions): Promise<Paginated<Department[]>> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments();
    const {data: departments} = await this.apiClient.post<Paginated<Department[]>>(endpoint, options);
    return departments;
  }
}
