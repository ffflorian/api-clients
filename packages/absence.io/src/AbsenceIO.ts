import {APIClient} from '@ffflorian/api-client';
import {
  AbsenceAPI,
  AllowanceTypeAPI,
  DepartmentAPI,
  LocationAPI,
  ReasonAPI,
  TeamAPI,
  TimespanAPI,
  UserAPI,
} from './api';
import {API, Authorization, ClientOptions} from './interfaces';

export class AbsenceIO {
  public api: API;
  private readonly apiClient: APIClient;
  private readonly options: ClientOptions;

  constructor(options: ClientOptions) {
    this.options = options;
    this.apiClient = new APIClient({
      apiUrl: 'https://app.absence.io/api/v2',
    });

    this.api = {
      absence: new AbsenceAPI(this.apiClient, options),
      allowanceType: new AllowanceTypeAPI(this.apiClient, options),
      department: new DepartmentAPI(this.apiClient, options),
      location: new LocationAPI(this.apiClient, options),
      reason: new ReasonAPI(this.apiClient, options),
      team: new TeamAPI(this.apiClient, options),
      timespan: new TimespanAPI(this.apiClient, options),
      user: new UserAPI(this.apiClient, options),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.setApiUrl(newUrl);
  }

  /**
   * Set a new API key.
   * @param authorization The API authorization data
   */
  public setApiAuthorization(authorization: Authorization): void {
    this.options.apiKey = authorization.apiKey;
    this.options.apiKeyId = authorization.apiKeyId;
  }
}
