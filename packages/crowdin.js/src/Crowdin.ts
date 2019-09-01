import {APIClient, AxiosConfigWithData} from '@ffflorian/api-client';
import {ProjectAPI} from './api';
import {API, ClientOptions, RequestOptions} from './interfaces';

export class Crowdin {
  public readonly api: API;
  private readonly apiClient: APIClient<RequestOptions>;
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

    this.apiClient = new APIClient({
      apiUrl: 'https://api.crowdin.com/api/',
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
    this.apiClient.setApiUrl(newUrl);
  }

  private setRequestInjector(): void {
    const requestInjector = (request: AxiosConfigWithData<RequestOptions>) => {
      return {
        ...request.params,
        key: this.options.apiKey,
      };
    };
    this.apiClient.setRequestInjector(requestInjector);
  }
}
