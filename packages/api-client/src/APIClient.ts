import {RequestService} from './RequestService';

export interface ClientOptions {
  apiUrl: string;
}

export class APIClient {
  public readonly requestService: RequestService;

  constructor(apiUrl: string);
  constructor(options: ClientOptions);
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiUrl: options};
    }

    this.requestService = new RequestService(options.apiUrl);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.requestService.setApiUrl(newUrl);
  }
}
