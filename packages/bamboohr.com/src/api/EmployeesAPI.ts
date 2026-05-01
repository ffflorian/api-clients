import type {APIClient} from '@ffflorian/api-client';

import type {
  Employee,
  EmployeeDirectory,
  EmployeesListOptions,
  EmployeesListResponse,
  Fields,
  WritableFields,
} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class EmployeesAPI {
  constructor(private readonly apiClient: APIClient) {}

  /**
   * Update an employee, based on employee id.
   */
  public async addEmployee(fields: WritableFields): Promise<Employee> {
    const endpoint = Endpoint.Employees.employees();
    const {data} = await this.apiClient.post<Employee>(endpoint, fields);
    return data;
  }

  /**
   * Get employee data by specifying a set of fields. This is suitable for getting basic employee information, including current values for fields that are part of a historical table, like job title, or compensation information.
   */
  public async getEmployee(id: number, fields?: Array<keyof Fields>, onlyCurrent?: boolean): Promise<Employee> {
    const endpoint = Endpoint.Employees.employee(id, {fields, onlyCurrent});
    const {data} = await this.apiClient.get<Employee>(endpoint);
    return data;
  }

  /**
   * Gets employee directory.
   */
  public async getEmployeeDirectory(): Promise<EmployeeDirectory> {
    const endpoint = Endpoint.Employees.employeeDirectory();
    const {data} = await this.apiClient.get<EmployeeDirectory>(endpoint);
    return data;
  }

  /**
   * Returns a cursor-paginated collection of employees with optional filter and sort criteria.
   * @see https://documentation.bamboohr.com/reference/list-employees
   */
  public async listEmployees(options?: EmployeesListOptions): Promise<EmployeesListResponse> {
    const endpoint = Endpoint.Employees.listEmployees(options);
    const {data} = await this.apiClient.get<EmployeesListResponse>(endpoint);
    return data;
  }

  /**
   * Update an employee, based on employee id.
   */
  public async updateEmployee(id: number, fields: WritableFields): Promise<Employee> {
    const endpoint = Endpoint.Employees.employees(id);
    const {data} = await this.apiClient.post<Employee>(endpoint, fields);
    return data;
  }
}
