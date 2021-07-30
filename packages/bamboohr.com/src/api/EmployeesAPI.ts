import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {Fields, Employee, WritableFields, EmployeeDirectory} from '../interfaces';

export class EmployeesAPI {
  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Update an employee, based on employee id.
   * @see https://documentation.bamboohr.com/reference#add-employee-1
   */
  public async addEmployee(fields: Pick<Fields, 'firstName' | 'lastName'>): Promise<Employee> {
    const endpoint = Endpoint.Employees.employees();
    const {data} = await this.apiClient.post<Employee>(endpoint, {data: fields});
    return data;
  }

  /**
   * Get employee data by specifying a set of fields. This is suitable for getting basic employee information, including current values for fields that are part of a historical table, like job title, or compensation information.
   * @see https://documentation.bamboohr.com/reference#get-employee
   */
  public async getEmployee(id: number, fields?: Array<keyof Fields>): Promise<Employee> {
    const endpoint = Endpoint.Employees.employees(id, fields);
    const {data} = await this.apiClient.get<Employee>(endpoint);
    return data;
  }

  /**
   * Gets employee directory.
   * @see https://documentation.bamboohr.com/reference#get-employees-directory-1
   */
  public async getEmployeeDirectory(): Promise<EmployeeDirectory> {
    const endpoint = Endpoint.Employees.employeeDirectory();
    const {data} = await this.apiClient.get<EmployeeDirectory>(endpoint);
    return data;
  }

  /**
   * Update an employee, based on employee id.
   * @see https://documentation.bamboohr.com/reference#update-employee
   */
  public async updateEmployee(id: number, fields: WritableFields): Promise<Employee> {
    const endpoint = Endpoint.Employees.employees(id);
    const {data} = await this.apiClient.post<Employee>(endpoint, {data: fields});
    return data;
  }
}
