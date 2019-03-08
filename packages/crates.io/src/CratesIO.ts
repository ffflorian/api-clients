import {APIClient} from '@ffflorian/api-client';
import {CratesAPI} from './api';
import {Endpoint} from './Endpoints';
import {API, ClientOptions, Summary} from './interfaces';

export class CratesIO {
  public readonly api: API;
  private readonly apiClient: APIClient;

  constructor(apiKey?: string);
  constructor(options?: ClientOptions);
  constructor(options?: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    this.apiClient = new APIClient({
      apiUrl: 'https://crates.io/api/v1',
    });

    this.api = {
      crates: new CratesAPI(this.apiClient),
    };
  }

  /**
   * Retrieve a summary containing crates.io wide information.
   */
  public summary(): Promise<Summary> {
    const endpoint = Endpoint.summary();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.setApiUrl(newUrl);
  }
}
