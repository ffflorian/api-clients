import type {EmployeesAPI, TimeOffAPI} from '../api/';

export interface API {
  employees: EmployeesAPI;
  timeOff: TimeOffAPI;
}
