import * as hawk from '@hapi/hawk';

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
  private readonly baseURL: string;
  private readonly options: ClientOptions;

  constructor(options: ClientOptions) {
    this.options = options;

    const credentials: hawk.client.Credentials = {
      algorithm: 'sha256',
      id: this.options.apiKeyId,
      key: this.options.apiKey,
    };

    this.baseURL = 'https://app.absence.io/api/v2';

    this.baseURL.interceptors.request.use(config => {
      const hawkHeader = hawk.client.header(`${config.baseURL}${config.url}`, config.method!, {credentials});
      config.headers.set('Authorization', hawkHeader.header);

      return config;
    });

    this.api = {
      absence: new AbsenceAPI(this.baseURL, options),
      allowanceType: new AllowanceTypeAPI(this.baseURL, options),
      department: new DepartmentAPI(this.baseURL, options),
      location: new LocationAPI(this.baseURL, options),
      reason: new ReasonAPI(this.baseURL, options),
      team: new TeamAPI(this.baseURL, options),
      timespan: new TimespanAPI(this.baseURL, options),
      user: new UserAPI(this.baseURL, options),
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
   * @param newUrl The new API URL
   */
  public setApiUrl(newUrl: string): void {
    this.baseURL.defaults.baseURL = newUrl;
  }
}
