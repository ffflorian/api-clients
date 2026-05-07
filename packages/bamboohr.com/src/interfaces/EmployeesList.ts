import {Fields} from './Fields';

export interface EmployeesListFilter {
  firstName?: string;
  ids?: number[];
  jobTitleName?: string;
  lastName?: string;
  status?: 'active' | 'inactive';
}

export interface EmployeesListOptions {
  fields?: Array<keyof Fields>;
  filter?: EmployeesListFilter;
  page?: EmployeesListPage;
  sort?: string;
}

export interface EmployeesListPage {
  after?: string;
  before?: string;
  limit?: number;
}

export type EmployeesListResponse = Record<string, unknown>;
