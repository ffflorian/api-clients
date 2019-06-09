import {APIClient} from '@ffflorian/api-client';

import {CratesAPI} from './api';
import {Endpoint} from './Endpoints';
import {API, ClientOptions, Summary} from './interfaces';

export class CratesIO {
  public readonly api: API;
  private readonly apiClient: APIClient;
  private readonly options: ClientOptions;

  constructor(apiKey?: string);
  constructor(options?: ClientOptions);
  constructor(options?: ClientOptions | string) {
    this.options = typeof options === 'string' ? {apiKey: options} : options || {};

    this.apiClient = new APIClient('https://crates.io/api/v1');

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

  /**
   * Set a new API key.
   * @param apiKey The API key
   */
  public setApiKey(apiKey: string): void {
    this.options.apiKey = apiKey;
    this.api.crates.setApiKey(apiKey);
  }
}
