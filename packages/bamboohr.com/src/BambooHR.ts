import crypto from 'node:crypto';
import {APIClient} from '@ffflorian/api-client';

import {EmployeesAPI, TimeOffAPI} from './api';
import type {API, ClientOptions} from './interfaces';

export class BambooHR {
  public readonly api: API;
  private readonly apiClient: APIClient;
  private readonly options: ClientOptions;

  constructor(options: ClientOptions) {
    this.options = options;

    const baseURL = `https://api.bamboohr.com/api/gateway.php/${options.companyDomain}/v1/`;

    this.apiClient = new APIClient(baseURL, {
      auth: {
        password: crypto.randomBytes(16).toString('base64').substring(0, 7),
        username: this.options.apiKey,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    this.apiClient.interceptors.response.push(response => {
      const errorMessage = response.headers.get('x-bamboohr-error-message') || response.statusText;
      throw new Error(`HTTP error ${response.status}: ${errorMessage}`);
    });

    this.api = {
      employees: new EmployeesAPI(this.apiClient),
      timeOff: new TimeOffAPI(this.apiClient),
    };
  }
}
