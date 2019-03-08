import {CratesAPI} from './api/';
import {Endpoint} from './Endpoints';
import {API, ClientOptions, Summary} from './interfaces/';
import {RequestService} from './RequestService';

export class CratesIO {
  private readonly requestService: RequestService;
  public readonly api: API;

  constructor(apiKey?: string);
  constructor(options?: ClientOptions);
  constructor(options?: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    this.requestService = new RequestService(options);

    this.api = {
      crates: new CratesAPI(this.requestService),
    };
  }

  /**
   * Retrieve a summary containing crates.io wide information.
   */
  public summary(): Promise<Summary> {
    const endpoint = Endpoint.summary();
    return this.requestService.get(endpoint);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.requestService.setApiUrl(newUrl);
  }
}
