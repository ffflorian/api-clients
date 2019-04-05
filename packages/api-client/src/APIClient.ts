import {RequestInjectorFn, RequestService} from './RequestService';

export interface ClientOptions<T> {
  /** The API URL (e.g. "https://example.com/api/v1"). */
  apiUrl: string;
  /** An optional injector which alters every Axios request configuration before the request is sent. */
  requestInjector?: RequestInjectorFn<T>;
  // /** An optional injector which alters every Axios response before it is returned to its requestor. */
  // responseInjector?: ResponseInjectorFn<U>;
}

export class APIClient<T = any> {
  public readonly requestService: RequestService<T>;

  constructor(apiUrl: string);
  constructor(options: ClientOptions<T>);
  constructor(options: ClientOptions<T> | string) {
    if (typeof options === 'string') {
      options = {apiUrl: options};
    }

    this.requestService = new RequestService<T>(options);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.requestService.setApiUrl(newUrl);
  }
}
