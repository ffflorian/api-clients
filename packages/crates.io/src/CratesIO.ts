import {CratesAPI} from './api';
import {Endpoint} from './Endpoints';
import type {API, ClientOptions, Summary} from './interfaces';

export class CratesIO {
  public readonly api: API;
  private readonly options: ClientOptions;
  private baseURL: string;

  constructor(apiKey?: string);
  constructor(options?: ClientOptions);
  constructor(options?: ClientOptions | string) {
    this.options = typeof options === 'string' ? {apiKey: options} : options || {};
    this.baseURL = this.options.apiKey || 'https://crates.io/api/v1/';

    this.api = {
      crates: new CratesAPI(this.baseURL, this.options.apiKey),
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
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.baseURL = newUrl;
    this.api.crates = new CratesAPI(this.baseURL, this.options.apiKey);
  }

  /**
   * Retrieve a summary containing crates.io wide information.
   */
  public async summary(): Promise<Summary> {
    const endpoint = Endpoint.summary();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }
}
