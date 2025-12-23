import {APIClient} from '@ffflorian/api-client';

import {GitHubRepositoryAPI, GitHubUserAPI, PlatformAPI, ProjectAPI, UserAPI} from './api';
import type {API, ClientOptions} from './interfaces/';

export class LibrariesIO {
  public readonly api: API;
  private readonly apiClient: APIClient;
  private readonly options: Required<ClientOptions>;

  constructor(apiKey: string);
  constructor(options: ClientOptions);
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiKey: options};
    }

    this.options = {
      apiUrl: 'https://libraries.io/api',
      ...options,
    };

    this.apiClient = new APIClient(this.options.apiUrl);

    this.apiClient.interceptors.request.push(options => {
      if (options.body) {
        const body = JSON.parse(options.body.toString());
        body.api_key = this.options.apiKey;
        options.body = JSON.stringify(body);
      } else {
        const body = {api_key: this.options.apiKey};
        options.body = JSON.stringify(body);
      }
      return options;
    });

    this.apiClient.interceptors.response.push(response => {
      const headers = response.headers;
      if (headers.get('total')) {
        return {...response, totalResults: Number(headers.get('total'))} as any;
      }
      return response;
    });

    this.api = {
      github: {
        repository: new GitHubRepositoryAPI(this.apiClient, this.options),
        user: new GitHubUserAPI(this.apiClient, this.options),
      },
      platform: new PlatformAPI(this.apiClient, this.options),
      project: new ProjectAPI(this.apiClient, this.options),
      user: new UserAPI(this.apiClient, this.options),
    };
  }

  /**
   * Set a new API key.
   * @param apiKey The new API key
   */
  public setApiKey(apiKey: string): void {
    this.options.apiKey = apiKey;
  }

  /*

      const contentType = headers['content-type'] ? String(headers['content-type']) : undefined;
      const rateLimit = Number(headers['x-ratelimit-limit']);
      const rateLimitRemaining = Number(headers['x-ratelimit-remaining']);
      const totalResults = headers['total'] ? Number(headers['total']) : undefined;
  */

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }
}
