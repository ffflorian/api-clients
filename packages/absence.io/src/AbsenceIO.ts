import {APIClient} from '@ffflorian/api-client';
import * as hawk from '@hapi/hawk';

import type {API, Authorization, ClientOptions} from './interfaces';

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

export class AbsenceIO {
  public readonly api: API;
  private readonly apiClient: APIClient;
  private readonly options: ClientOptions;

  constructor(options: ClientOptions) {
    this.options = options;
    const baseURL = options.apiUrl || 'https://app.absence.io/api/v2';

    this.apiClient = new APIClient(baseURL);

    this.apiClient.interceptors.request.push(config => {
      if (this.options.accessToken) {
        config.headers = {...config.headers, Authorization: `Bearer ${this.options.accessToken}`};
        return config;
      }

      if (!this.options.apiKey || !this.options.apiKeyId) {
        throw new Error('API credentials need to be set in order to perform this request');
      }

      const credentials: hawk.client.Credentials = {
        algorithm: 'sha256',
        id: this.options.apiKeyId,
        key: this.options.apiKey,
      };
      const hawkHeader = hawk.client.header(config.url.toString(), config.method, {credentials});
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
    if ('accessToken' in authorization) {
      this.options.accessToken = authorization.accessToken;
      this.options.apiKey = undefined;
      this.options.apiKeyId = undefined;
      return;
    }

    this.options.apiKey = authorization.apiKey;
    this.options.apiKeyId = authorization.apiKeyId;
    this.options.accessToken = undefined;
  }

  /**
   * Set a new API URL.
   * @param newURL The new API URL
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }
}
