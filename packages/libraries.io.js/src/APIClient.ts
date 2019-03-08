import {URL} from 'url';

import {GitHubRepositoryAPI, GitHubUserAPI, PlatformAPI, ProjectAPI, UserAPI} from './api/';
import {API, ClientOptions} from './interfaces/';
import {RequestService} from './RequestService';

export class LibrariesIO {
  private readonly requestService: RequestService;
  private readonly options: ClientOptions;
  public readonly api: API;

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

    this.requestService = new RequestService(options);

    this.api = {
      github: {
        repository: new GitHubRepositoryAPI(this.requestService),
        user: new GitHubUserAPI(this.requestService),
      },
      platform: new PlatformAPI(this.requestService),
      project: new ProjectAPI(this.requestService),
      user: new UserAPI(this.requestService),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: URL): void {
    this.requestService.setApiUrl(newUrl);
  }
}
