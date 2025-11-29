import {APIClient} from '@ffflorian/api-client';

import {ICanHazDadJokeAPI} from './ICanHazDadJokeAPI';
import type {ClientOptions} from './Interfaces';

export class ICanHazDadJoke {
  public readonly api: ICanHazDadJokeAPI;
  private readonly apiClient: APIClient;
  private readonly options: Required<ClientOptions>;

  constructor(options?: ClientOptions) {
    this.options = {
      apiUrl: 'https://icanhazdadjoke.com',
      ...options,
    };

    this.apiClient = new APIClient(this.options.apiUrl, {
      headers: {
        Accept: 'application/json',
        'User-Agent':
          'icanhazdadjoke.com API Client (https://github.com/ffflorian/api-clients/tree/main/packages/icanhazdadjoke)',
      },
    });
    this.api = new ICanHazDadJokeAPI(this.apiClient, this.options);
  }

  /**
   * Set a new API URL.
   * @param url The new API URL.
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }
}
