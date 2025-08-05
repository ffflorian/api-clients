import {PackageAPI, SearchAPI} from './api';
import type {API, ClientOptions} from './interfaces/';

export class NpmsIO {
  public readonly api: API;
  private baseURL: string;

  constructor(options: ClientOptions = {}) {
    this.baseURL = options.apiUrl || 'https://api.npms.io/v2';

    this.api = {
      package: new PackageAPI(this.baseURL),
      search: new SearchAPI(this.baseURL),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.baseURL = newUrl;
    this.api.package = new PackageAPI(this.baseURL);
    this.api.search = new SearchAPI(this.baseURL);
  }
}
