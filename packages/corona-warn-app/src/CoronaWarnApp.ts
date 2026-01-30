import {APIClient} from '@ffflorian/api-client';

import type {API, ClientOptions} from './interfaces';

import {ApplicationConfigurationAPI, DiagnosisKeysAPI} from './api';

export class CoronaWarnApp {
  private static readonly BASE_URL = 'https://svc90.main.px.t-online.de/version/v1/';
  public readonly api: API;
  private readonly apiClient: APIClient;

  constructor(options?: ClientOptions) {
    this.apiClient = new APIClient(options?.apiUrl || CoronaWarnApp.BASE_URL);

    this.api = {
      applicationConfiguration: new ApplicationConfigurationAPI(this.apiClient),
      diagnosisKeys: new DiagnosisKeysAPI(this.apiClient),
    };
  }

  /**
   * Set a new API URL.
   * @param newURL The new API URL
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }
}
