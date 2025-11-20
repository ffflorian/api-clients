import type {ClientOptions} from '../interfaces/';

export class APIBase {
  protected baseURL: string;
  protected readonly options: ClientOptions;

  constructor(baseURL: string, options: ClientOptions) {
    this.baseURL = baseURL;
    this.options = options;
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.baseURL = newUrl;
  }
}
