import {AxiosInstance} from 'axios';

import {Endpoint} from '../../Endpoints';
import {
  ClientOptions,
  Contributor,
  LibrariesIOResult,
  PaginationOptions,
  PlatformType,
  Project,
  Repository,
  RequestOptions,
} from '../../interfaces/';
import {APIBase} from '../APIBase';

export class GitHubUserAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Get a list of packages that the given user has contributed to.
   * @see https://libraries.io/api#user-project-contributions
   * @param userName The username
   * @param options Pagination options
   */
  public async getContributedProjects(
    userName: string,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Project[]>> {
    const endpoint = Endpoint.GitHub.User.contributedProjects(userName);
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }

  /**
   * Get a list of repositories that the given user has contributed to.
   * @see https://libraries.io/api#user-repository-contributions
   * @param userName The username
   * @param options Pagination options
   */
  public async getContributedRepositories(
    userName: string,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Repository[]>> {
    const endpoint = Endpoint.GitHub.User.contributedRepositories(userName);
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }

  public async getDependencies(userName: string, options?: PaginationOptions): Promise<LibrariesIOResult<Project[]>>;
  public async getDependencies(
    userName: string,
    platform?: PlatformType,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Project[]>>;
  /**
   * Get a list of unique packages that the given user's repositories list as a dependency. Ordered by frequency of use in those repositories.
   * @see https://libraries.io/api#user-dependencies
   * @param userName The username
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param options Pagination options
   */
  public async getDependencies(
    userName: string,
    platformOrOptions?: PlatformType | PaginationOptions,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Project[]>> {
    const endpoint = Endpoint.GitHub.User.contributedRepositories(userName);
    let parameters: RequestOptions = {};

    if (platformOrOptions) {
      if (typeof platformOrOptions === 'string') {
        parameters = {
          platform: platformOrOptions,
          ...options,
        };
      } else {
        parameters = platformOrOptions;
      }
    }

    const {data} = await this.apiClient.get(endpoint, {data: parameters});
    return data;
  }

  /**
   * Get a list of packages referencing the given user's repositories.
   * @see https://libraries.io/api#user-projects
   * @param userName The username
   * @param options Pagination options
   */
  public async getProjects(userName: string, options?: PaginationOptions): Promise<LibrariesIOResult<Project[]>> {
    const endpoint = Endpoint.GitHub.User.repositories(userName);
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }

  /**
   * Get repositories owned by a user.
   * @see https://libraries.io/api#user-repositories
   * @param userName The username
   * @param options Pagination options
   */
  public async getRepositories(
    userName: string,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Repository[]>> {
    const endpoint = Endpoint.GitHub.User.repositories(userName);
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }

  /**
   * Get information for a given user or organization.
   * @see https://libraries.io/api#user
   * @param userName The username
   */
  public async getUser(userName: string): Promise<LibrariesIOResult<Contributor>> {
    const endpoint = Endpoint.GitHub.User.user(userName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
