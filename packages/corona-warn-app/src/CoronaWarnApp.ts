import type {API, ClientOptions} from './interfaces';
import {DiagnosisKeysAPI, ApplicationConfigurationAPI} from './api';

export class CoronaWarnApp {
  private static readonly BASE_URL = 'https://svc90.main.px.t-online.de/version/v1/';
  public readonly api: API;
  private baseURL: string;

  constructor(options?: ClientOptions) {
    this.baseURL= options?.apiUrl || CoronaWarnApp.BASE_URL;

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
    this.baseURL = newUrl;
    this.api.applicationConfiguration = new ApplicationConfigurationAPI(this.baseURL);
    this.api.diagnosisKeys = new DiagnosisKeysAPI(this.baseURL);
  }
}
