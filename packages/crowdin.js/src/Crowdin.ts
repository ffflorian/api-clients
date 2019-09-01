import axios, {AxiosInstance} from 'axios';
import {ProjectAPI} from './api';
import {API, ClientOptions} from './interfaces';

export class Crowdin {
  public readonly api: API;
  private readonly apiClient: AxiosInstance;
  private readonly options: ClientOptions;

  constructor(apiKey: string);
  constructor(options: ClientOptions);
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    this.options = options;

    if (!this.options.apiKey) {
      throw new Error('An API key needs to be set in order to use the client.');
    }

    this.apiClient = axios.create({
      baseURL: 'https://api.crowdin.com/api/',
    });

    this.setRequestInjector();

    this.api = {
      project: new ProjectAPI(this.apiClient),
    };
  }

  /**
   * Set a new API key.
   * @param apiKey The API key
   */
  public setApiKey(apiKey: string): void {
    this.options.apiKey = apiKey;
    this.setRequestInjector();
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }

  private setRequestInjector(): void {
    this.apiClient.interceptors.request.use(request => {
      return {
        ...request.params,
        key: this.options.apiKey,
      };
    });
  }
}
