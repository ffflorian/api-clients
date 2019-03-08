import {
  AbsenceAPI,
  AllowanceTypeAPI,
  DepartmentAPI,
  LocationAPI,
  ReasonAPI,
  TeamAPI,
  TimespanAPI,
  UserAPI,
} from './api/';
import {API, ClientOptions} from './interfaces/';
import {RequestService} from './RequestService';

export class AbsenceIO {
  public api: API;

  constructor(options: ClientOptions) {
    this.api = {
      absence: new AbsenceAPI(new RequestService(options)),
      allowanceType: new AllowanceTypeAPI(new RequestService(options)),
      department: new DepartmentAPI(new RequestService(options)),
      location: new LocationAPI(new RequestService(options)),
      reason: new ReasonAPI(new RequestService(options)),
      team: new TeamAPI(new RequestService(options)),
      timespan: new TimespanAPI(new RequestService(options)),
      user: new UserAPI(new RequestService(options)),
    };
  }
}
