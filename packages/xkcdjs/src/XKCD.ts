import {APIClient} from '@ffflorian/api-client';
import {ClientOptions} from './Interfaces';
import {XKCDAPI} from './XKCDAPI';

export class XKCD {
  public readonly api: XKCDAPI;
  private readonly apiClient: APIClient;
  private readonly options: Required<ClientOptions>;

  constructor(options?: ClientOptions) {
    this.options = {
      apiUrl: 'https://xkcd.com',
      ...options,
    };

    this.apiClient = new APIClient(this.options.apiUrl);
    this.api = new XKCDAPI(this.apiClient, this.options);
  }

  /**
   * Set a new API URL.
   * @param url The new API URL.
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.requestService.setApiUrl(newUrl);
  }
}
