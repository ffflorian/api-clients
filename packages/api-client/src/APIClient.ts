import {AxiosConfigWithData, RequestInjectorFn, RequestService} from './RequestService';

export interface ClientOptions<T> {
  /** The API URL (e.g. "https://example.com/api/v1"). */
  apiUrl: string;
  /** An optional injector which alters every Axios request configuration before the request is sent. */
  requestInjector?: RequestInjectorFn<T>;
  // /** An optional injector which alters every Axios response before it is returned to its requestor. */
  // responseInjector?: ResponseInjectorFn<U>;
}

export abstract class APIClient<T = any> {
  private readonly requestService: RequestService<T>;
  protected readonly config: ClientOptions<T>;

  constructor(config: ClientOptions<T>) {
    this.config = config;
    this.requestService = new RequestService<T>(config);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.requestService.setApiUrl(newUrl);
  }

  /**
   * Set a (new) request injector.
   * @param requestInjector The new request injector.
   */
  public setRequestInjector(requestInjector: RequestInjectorFn<T>): void {
    this.config.requestInjector = requestInjector;
    this.requestService.setRequestInjector(requestInjector);
  }

  /** Remove the request injector. */
  public removeRequestInjector(): void {
    delete this.config.requestInjector;
    this.requestService.removeRequestInjector();
  }

  public async delete<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    return this.requestService.delete(url, options);
  }

  public async get<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    return this.requestService.get(url, options);
  }

  public async head<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    return this.requestService.head(url, options);
  }

  public async options<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    return this.requestService.options(url, options);
  }

  public async patch<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    return this.requestService.patch(url, options);
  }

  public async post<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    return this.requestService.post(url, options);
  }

  public async put<U>(url: string, options?: AxiosConfigWithData<T>): Promise<U> {
    return this.requestService.put(url, options);
  }
}
