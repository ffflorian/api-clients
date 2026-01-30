import {Fields} from './Fields';

export type Employee = BaseEmployee & PartialNull<Fields>;

export interface EmployeeDirectory {
  employees: Employee[];
  fields: {
    id: keyof Fields;
    name: string;
    type: string;
  };
}

export interface OffEmployee {
  employeeId: number;
  end: string;
  id: number;
  name: string;
  start: string;
  type: string;
}

interface BaseEmployee {
  firstName: string;
  id: string;
  lastName: string;
}

type PartialNull<T> = {[P in keyof T]?: null | T[P]};
