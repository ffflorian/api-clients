import {Endpoint} from '../Endpoints';
import {
  Contributor,
  LibrariesIOResult,
  PaginationOptions,
  PlatformType,
  Project,
  ProjectUsage,
  ProjectWithDependencies,
  Repository,
  SearchOptions,
} from '../interfaces/';
import {RequestService} from '../RequestService';

export class ProjectAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /**
   * Get information about a package and it's versions.
   * @see https://libraries.io/api#project
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public getProject(platform: PlatformType, projectName: string): Promise<LibrariesIOResult<Project>> {
    const endpoint = Endpoint.Project.project(platform, projectName);
    return this.requestService.get(endpoint);
  }

  /**
   * Get a list of dependencies for a version of a project, pass `latest` as version to get dependency info for the latest available version
   * @see https://libraries.io/api#project-dependencies
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param projectVersion
   */
  public getProjectWithDependencies(
    platform: PlatformType,
    projectName: string,
    projectVersion: string
  ): Promise<LibrariesIOResult<ProjectWithDependencies>> {
    const endpoint = Endpoint.Project.dependencies(platform, projectName, projectVersion);
    return this.requestService.get(endpoint);
  }

  /**
   * Get packages that have at least one version that depends on a given project.
   * @see https://libraries.io/api#project-dependents
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Pagination options
   */
  public getDependendents(
    platform: PlatformType,
    projectName: string,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Project[]>> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint, options);
  }

  /**
   * Get repositories that depend on a given project.
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Pagination options
   */
  public getDependendentRepositories(
    platform: PlatformType,
    projectName: string,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Repository[]>> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint, options);
  }

  /**
   * Get users that have contributed to a given project.
   * @see https://libraries.io/api#project-contributors
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Pagination options
   */
  public getContributors(
    platform: PlatformType,
    projectName: string,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Contributor[]>> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    return this.requestService.get(endpoint, options);
  }

  /**
   * Get breakdown of SourceRank score for a given project.
   * @see https://libraries.io/api#project-sourcerank
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public getSourceRank(platform: PlatformType, projectName: string): Promise<LibrariesIOResult<number>> {
    const endpoint = Endpoint.Project.sourceRank(platform, projectName);
    return this.requestService.get(endpoint);
  }

  /**
   * Get breakdown of version usage for a given project.
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public getUsage(platform: PlatformType, projectName: string): Promise<LibrariesIOResult<ProjectUsage>> {
    const endpoint = Endpoint.Project.sourceRank(platform, projectName);
    return this.requestService.get(endpoint);
  }

  /**
   * Search for projects.
   * @see https://libraries.io/api#project-search
   * @param query The search query
   * @param options Sorting, filter and pagination options
   */
  public search(query: string, options?: SearchOptions): Promise<LibrariesIOResult<Project[]>> {
    const endpoint = Endpoint.Project.search();
    return this.requestService.get(endpoint, {...options, query});
  }
}
