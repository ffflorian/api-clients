import {
  AbsenceAPI,
  AllowanceTypeAPI,
  DepartmentAPI,
  LocationAPI,
  ReasonAPI,
  TeamAPI,
  TimespanAPI,
  UserAPI,
} from '../api/';

export interface API {
  absence: AbsenceAPI;
  allowanceType: AllowanceTypeAPI;
  department: DepartmentAPI;
  location: LocationAPI;
  reason: ReasonAPI;
  team: TeamAPI;
  timespan: TimespanAPI;
  user: UserAPI;
}
