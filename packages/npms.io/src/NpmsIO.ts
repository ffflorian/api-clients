import axios, {AxiosInstance} from 'axios';

import {PackageAPI, SearchAPI} from './api';
import type {API, ClientOptions} from './interfaces/';

export class NpmsIO {
  public readonly api: API;
  private readonly apiClient: AxiosInstance;

  constructor(options: ClientOptions = {}) {
    this.apiClient = axios.create({baseURL: options.apiUrl || 'https://api.npms.io/v2'});

    this.api = {
      package: new PackageAPI(this.apiClient),
      search: new SearchAPI(this.apiClient),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
    this.api.package = new PackageAPI(this.apiClient);
    this.api.search = new SearchAPI(this.apiClient);
  }
}
