
import {Endpoint} from '../Endpoints';
import type {ClientOptions, Department, Paginated, PaginationOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class DepartmentAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * Retrieve a single department
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#a9c45164-59e5-3daf-93f2-4c64f6cc52f0
   */
  public async retrieveDepartment(id: string): Promise<Department> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve department with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve departments
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#d596a243-9bc4-cb5f-dbc5-456c46437d09
   */
  public async retrieveDepartments(options?: PaginationOptions): Promise<Paginated<Department[]>> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments();
    const response = await fetch(endpoint, {body: JSON.stringify(options), method: 'POST'});
    if (!response.ok) {
      throw new Error(`Failed to retrieve departments: ${response.statusText}`);
    }
    return response.json();
  }
}
