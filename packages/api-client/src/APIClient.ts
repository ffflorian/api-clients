import {RequestService} from './RequestService';

interface Options {
  apiUrl: string;
}

export class APIClient {
  public readonly requestService: RequestService;

  constructor(options: Options) {
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
