import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../../Endpoints';
import {Contributor, PaginationOptions, PlatformType, Project, Repository, RequestOptions} from '../../interfaces/';

export class GitHubUserAPI {
  private readonly apiClient: APIClient<RequestOptions>;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  /**
   * Get information for a given user or organization.
   * @see https://libraries.io/api#user
   * @param userName The username
   */
  public getUser(userName: string): Promise<Contributor> {
    const endpoint = Endpoint.GitHub.User.user(userName);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Get repositories owned by a user.
   * @see https://libraries.io/api#user-repositories
   * @param userName The username
   * @param options Pagination options
   */
  public getRepositories(userName: string, options?: PaginationOptions): Promise<Repository[]> {
    const endpoint = Endpoint.GitHub.User.repositories(userName);
    return this.apiClient.requestService.get(endpoint, {data: options});
  }

  /**
   * Get a list of packages referencing the given user's repositories.
   * @see https://libraries.io/api#user-projects
   * @param userName The username
   * @param options Pagination options
   */
  public getProjects(userName: string, options?: PaginationOptions): Promise<Project[]> {
    const endpoint = Endpoint.GitHub.User.repositories(userName);
    return this.apiClient.requestService.get(endpoint, {data: options});
  }

  /**
   * Get a list of packages that the given user has contributed to.
   * @see https://libraries.io/api#user-project-contributions
   * @param userName The username
   * @param options Pagination options
   */
  public getContributedProjects(userName: string, options?: PaginationOptions): Promise<Project[]> {
    const endpoint = Endpoint.GitHub.User.contributedProjects(userName);
    return this.apiClient.requestService.get(endpoint, {data: options});
  }

  /**
   * Get a list of repositories that the given user has contributed to.
   * @see https://libraries.io/api#user-repository-contributions
   * @param userName The username
   * @param options Pagination options
   */
  public getContributedRepositories(userName: string, options?: PaginationOptions): Promise<Repository[]> {
    const endpoint = Endpoint.GitHub.User.contributedRepositories(userName);
    return this.apiClient.requestService.get(endpoint, {data: options});
  }

  public getDependencies(userName: string, options?: PaginationOptions): Promise<Project[]>;
  public getDependencies(userName: string, platform?: PlatformType, options?: PaginationOptions): Promise<Project[]>;
  /**
   * Get a list of unique packages that the given user's repositories list as a dependency. Ordered by frequency of use in those repositories.
   * @see https://libraries.io/api#user-dependencies
   * @param userName The username
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param options Pagination options
   */
  public getDependencies(
    userName: string,
    platformOrOptions?: PlatformType | PaginationOptions,
    options?: PaginationOptions
  ): Promise<Project[]> {
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

    return this.apiClient.requestService.get(endpoint, {data: parameters});
  }
}
