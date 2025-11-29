import * as hawk from '@hapi/hawk';
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
import type {API, Authorization, ClientOptions} from './interfaces';

export class AbsenceIO {
  public readonly api: API;
  private readonly apiClient: APIClient;
  private readonly options: ClientOptions;

  constructor(options: ClientOptions) {
    this.options = options;
    const baseURL = options.apiUrl || 'https://app.absence.io/api/v2';

    const credentials: hawk.client.Credentials = {
      algorithm: 'sha256',
      id: this.options.apiKeyId,
      key: this.options.apiKey,
    };

    this.apiClient = new APIClient(baseURL);

    this.apiClient.interceptors.request.push((url, config) => {
      const hawkHeader = hawk.client.header(url.toString(), config.method, {credentials});
      config.headers = {...config.headers, Authorization: hawkHeader.header};
      return config;
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
   * Set a new API key.
   * @param authorization The API authorization data
   */
  public setApiAuthorization(authorization: Authorization): void {
    this.options.apiKey = authorization.apiKey;
    this.options.apiKeyId = authorization.apiKeyId;
  }

  /**
   * Set a new API URL.
   * @param newURL The new API URL
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }
}
