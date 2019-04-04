import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../../Endpoints';
import {ClientOptions, PaginationOptions, Project, RepositoryWithDependencies} from '../../interfaces/';
import {APIBase} from '../APIBase';

export class GitHubRepositoryAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Get a info for a repository. Currently only works for open source repositories.
   * @see https://libraries.io/api#repository
   * @param repositoryOwner The repository owner
   * @param repositoryName The repository name
   */
  public getRepository(repositoryOwner: string, repositoryName: string): Promise<RepositoryWithDependencies> {
    const endpoint = Endpoint.GitHub.Repository.repository(repositoryOwner, repositoryName);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Get a list of dependencies for a repositories. Currently only works for open source repositories.
   * @see https://libraries.io/api#repository-dependencies
   * @param repositoryOwner The repository owner
   * @param repositoryName The repository name
   */
  public getRepositoryWithDependencies(
    repositoryOwner: string,
    repositoryName: string
  ): Promise<RepositoryWithDependencies> {
    const endpoint = Endpoint.GitHub.Repository.dependencies(repositoryOwner, repositoryName);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Get a list of packages referencing the given repository.
   * @see https://libraries.io/api#repository-projects
   * @param repositoryOwner The repository owner
   * @param repositoryName The repository name
   * @param options Pagination Options
   */
  public getProjects(repositoryOwner: string, repositoryName: string, options?: PaginationOptions): Promise<Project[]> {
    const endpoint = Endpoint.GitHub.Repository.projects(repositoryOwner, repositoryName);
    return this.apiClient.requestService.get(endpoint, {data: options});
  }
}
