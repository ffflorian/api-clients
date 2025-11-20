import type {API, ClientOptions} from './interfaces';
import {DiagnosisKeysAPI, ApplicationConfigurationAPI} from './api';

export class CoronaWarnApp {
  private baseURL = 'https://svc90.main.px.t-online.de/version/v1/';
  public readonly api: API;

  constructor(options?: ClientOptions) {
    this.baseURL = options?.apiUrl ?? this.baseURL;

    this.api = {
      applicationConfiguration: new ApplicationConfigurationAPI(this.baseURL),
      diagnosisKeys: new DiagnosisKeysAPI(this.baseURL),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API URL
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }
}
