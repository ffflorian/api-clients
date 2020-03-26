import axios, {AxiosInstance} from 'axios';

import {ICanHazDadJokeAPI} from './ICanHazDadJokeAPI';
import type {ClientOptions} from './Interfaces';

export class ICanHazDadJoke {
  public readonly api: ICanHazDadJokeAPI;
  private readonly apiClient: AxiosInstance;
  private readonly options: Required<ClientOptions>;

  constructor(options?: ClientOptions) {
    this.options = {
      apiUrl: 'https://icanhazdadjoke.com',
      ...options,
    };

    this.apiClient = axios.create({
      baseURL: this.options.apiUrl,
      headers: {
        Accept: 'application/json',
        'User-Agent':
          'icanhazdadjoke.com API Client (https://github.com/ffflorian/api-clients/tree/master/packages/icanhazdadjoke)',
      },
    });
    this.api = new ICanHazDadJokeAPI(this.apiClient, this.options);
  }

  /**
   * Set a new API URL.
   * @param url The new API URL.
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }
}
