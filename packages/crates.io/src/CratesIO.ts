import {APIClient} from '@ffflorian/api-client';

import type {API, ClientOptions, Summary} from './interfaces';

import {CratesAPI} from './api';
import {Endpoint} from './Endpoints';

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
   * Set a new API key.
   * @param apiKey The API key
   */
  public setApiKey(apiKey: string): void {
    this.options.apiKey = apiKey;
    this.api.crates.setApiKey(apiKey);
  }

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }

  /**
   * Retrieve a summary containing crates.io wide information.
   */
  public async summary(): Promise<Summary> {
    const endpoint = Endpoint.summary();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
