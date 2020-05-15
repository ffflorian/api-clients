import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {
  ClientOptions,
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
import {APIBase} from './APIBase';

export class ProjectAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Get users that have contributed to a given project.
   * @see https://libraries.io/api#project-contributors
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Pagination options
   */
  public async getContributors(
    platform: PlatformType,
    projectName: string,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Contributor[]>> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }

  /**
   * Get repositories that depend on a given project.
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Pagination options
   */
  public async getDependendentRepositories(
    platform: PlatformType,
    projectName: string,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Repository[]>> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }

  /**
   * Get packages that have at least one version that depends on a given project.
   * @see https://libraries.io/api#project-dependents
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Pagination options
   */
  public async getDependendents(
    platform: PlatformType,
    projectName: string,
    options?: PaginationOptions
  ): Promise<LibrariesIOResult<Project[]>> {
    const endpoint = Endpoint.Project.dependents(platform, projectName);
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }

  /**
   * Get information about a package and it's versions.
   * @see https://libraries.io/api#project
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public async getProject(platform: PlatformType, projectName: string): Promise<LibrariesIOResult<Project>> {
    const endpoint = Endpoint.Project.project(platform, projectName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Get a list of dependencies for a version of a project, pass `latest` as version to get dependency info for the latest available version
   * @see https://libraries.io/api#project-dependencies
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param projectVersion
   */
  public async getProjectWithDependencies(
    platform: PlatformType,
    projectName: string,
    projectVersion: string
  ): Promise<LibrariesIOResult<ProjectWithDependencies>> {
    const endpoint = Endpoint.Project.dependencies(platform, projectName, projectVersion);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Get breakdown of SourceRank score for a given project.
   * @see https://libraries.io/api#project-sourcerank
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public async getSourceRank(platform: PlatformType, projectName: string): Promise<LibrariesIOResult<number>> {
    const endpoint = Endpoint.Project.sourceRank(platform, projectName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Get breakdown of version usage for a given project.
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public async getUsage(platform: PlatformType, projectName: string): Promise<LibrariesIOResult<ProjectUsage>> {
    const endpoint = Endpoint.Project.sourceRank(platform, projectName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Search for projects.
   * @see https://libraries.io/api#project-search
   * @param query The search query
   * @param options Sorting, filter and pagination options
   */
  public async search(query: string, options?: SearchOptions): Promise<LibrariesIOResult<Project[]>> {
    const endpoint = Endpoint.Project.search();
    // eslint-disable-next-line id-length
    const {data} = await this.apiClient.get(endpoint, {data: {...options, q: query}});
    return data;
  }
}
