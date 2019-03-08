import {RequestService} from './RequestService';

export interface ClientOptions {
  apiUrl: string;
}

export class APIClient {
  public readonly requestService: RequestService;

  constructor(options: ClientOptions) {
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
