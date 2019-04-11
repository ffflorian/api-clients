import {AxiosRequestConfig, ClientOptions} from '@ffflorian/api-client';
const hawk = require('hawk');

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
import {API, Authorization, RequestOptions} from './interfaces';

export class AbsenceIO {
  public readonly api: API;
  private readonly options: Authorization;

  constructor(options: Authorization) {
    this.options = options;

    const credentials = {
      algorithm: 'sha256',
      id: this.options.apiKeyId,
      key: this.options.apiKey,
    };

    const requestInjector = (config: AxiosRequestConfig) => {
      const hawkHeader = hawk.client.header(config.url, config.method, {credentials});

      return {
        ...config,
        headers: {
          Authorization: hawkHeader.header,
        },
      };
    };

    const config: ClientOptions<RequestOptions> = {
      apiUrl: 'https://app.absence.io/api/v2',
      requestInjector,
    };

    this.api = {
      absence: new AbsenceAPI(config, this.options),
      allowanceType: new AllowanceTypeAPI(config, options),
      department: new DepartmentAPI(config, options),
      location: new LocationAPI(config, options),
      reason: new ReasonAPI(config, options),
      team: new TeamAPI(config, options),
      timespan: new TimespanAPI(config, options),
      user: new UserAPI(config, options),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API URL
   */
  public setApiUrl(newUrl: string): void {
    this.api.absence.setApiUrl(newUrl);
  }

  /**
   * Set a new API key.
   * @param authorization The API authorization data
   */
  public setApiAuthorization(authorization: Authorization): void {
    this.api.absence.setApiAuthorization(authorization);
  }
}
