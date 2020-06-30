import axios, {AxiosInstance} from 'axios';

import type {API, ClientOptions} from './interfaces';
import {DiagnosisKeysAPI, ApplicationConfigurationAPI} from './api';

export class CoronaWarnApp {
  private static readonly BASE_URL = 'https://svc90.main.px.t-online.de/version/v1/';
  public readonly api: API;
  private readonly apiClient: AxiosInstance;

  constructor(options?: ClientOptions) {
    this.apiClient = axios.create({
      baseURL: options?.apiUrl || CoronaWarnApp.BASE_URL,
    });

    this.api = {
      applicationConfiguration: new ApplicationConfigurationAPI(this.apiClient),
      diagnosisKeys: new DiagnosisKeysAPI(this.apiClient),
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
