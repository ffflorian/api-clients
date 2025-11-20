import type {ClientOptions} from './Interfaces';
import {XKCDAPI} from './XKCDAPI';

export class XKCD {
  public api: XKCDAPI;
  private baseURL: string;

  constructor(private readonly options?: ClientOptions) {
    this.baseURL = this.options?.apiUrl || 'https://xkcd.com';

    this.api = new XKCDAPI(this.baseURL);
  }

  /**
   * Set a new API URL.
   * @param url The new API URL.
   */
  public setApiUrl(newUrl: string): void {
    this.baseURL = newUrl;
    this.api = new XKCDAPI(this.baseURL);
  }
}
