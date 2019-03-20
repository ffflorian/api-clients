import {InjectorFn, RequestService} from './RequestService';

export interface ClientOptions {
  /** The API URL (e.g. "https://example.com/api/v1"). */
  apiUrl: string;
  /** An optional injector which alters every Axios request configuration before the request is sent. */
  requestInjector?: InjectorFn;
}

export class APIClient {
  public readonly requestService: RequestService;

  constructor(apiUrl: string);
  constructor(options: ClientOptions);
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiUrl: options};
    }

    this.requestService = new RequestService(options);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.requestService.setApiUrl(newUrl);
  }
}
