const hawk = require('hawk');
import {APIClient, AxiosRequestConfig} from '@ffflorian/api-client';

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
import {API, Authorization, ClientOptions, RequestOptions} from './interfaces';

export class AbsenceIO {
  public readonly api: API;
  private readonly apiClient: APIClient<RequestOptions>;
  private readonly options: ClientOptions;

  constructor(options: ClientOptions) {
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

    this.apiClient = new APIClient({
      apiUrl: 'https://app.absence.io/api/v2',
      requestInjector,
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
   * @param newUrl The new API URL
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
