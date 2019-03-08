import {URL} from 'url';

import {ChecksAPI, NodesAPI} from './api/';
import {API, ClientOptions} from './interfaces/';
import {RequestService} from './RequestService';

export class UpdownIO {
  public api: API;

  constructor(apiKey?: string);
  constructor(options?: ClientOptions);
  constructor(options?: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    this.api = {
      checks: new ChecksAPI(new RequestService(options)),
      nodes: new NodesAPI(new RequestService()),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: URL): void {
    this.api.checks.setApiUrl(newUrl);
    this.api.nodes.setApiUrl(newUrl);
  }
}
