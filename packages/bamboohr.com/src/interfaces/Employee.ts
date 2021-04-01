import {Fields} from './Fields';

type PartialNull<T> = {[P in keyof T]?: T[P] | null};

interface BaseEmployee {
  firstName: string;
  id: string;
  lastName: string;
}

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
