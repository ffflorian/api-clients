import axios, {AxiosInstance} from 'axios';

import {EmployeesAPI, TimeOffAPI} from './api';
import type {API, ClientOptions} from './interfaces';

export class BambooHR {
  public readonly api: API;
  private readonly apiClient: AxiosInstance;
  private readonly options: ClientOptions;

  constructor(options: ClientOptions) {
    this.options = options;

    this.apiClient = axios.create({
      auth: {
        // eslint-disable-next-line no-magic-numbers
        password: Math.random().toString(36).substring(7),
        username: this.options.apiKey,
      },
      baseURL: `https://api.bamboohr.com/api/gateway.php/${options.companyDomain}/v1/`,
      headers: {
        Accept: 'application/json',
      },
    });

    this.apiClient.interceptors.response.use(undefined, ({response}) => {
      const errorMessage = response.headers['x-bamboohr-error-message'] || response.statusText;
      throw new Error(`HTTP error ${response.status}: ${errorMessage}`);
    });

    this.api = {
      employees: new EmployeesAPI(this.apiClient),
      timeOff: new TimeOffAPI(this.apiClient),
    };
  }
}
