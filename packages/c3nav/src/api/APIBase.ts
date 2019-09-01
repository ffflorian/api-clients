import {AxiosInstance} from 'axios';

import {ClientOptions} from '../interfaces/';

export class APIBase {
  protected readonly apiClient: AxiosInstance;
  protected readonly options: ClientOptions;

  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }
}
