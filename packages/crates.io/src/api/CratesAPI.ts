import {Endpoint} from '../Endpoints';
import {
  AuthorsResult,
  CrateResult,
  DependenciesResult,
  DownloadsResult,
  FollowingResult,
  ReverseDependenciesResult,
  SearchOptions,
  SearchResult,
  TeamsResult,
  UrlResult,
  UsersResult,
  Version,
} from '../interfaces/';
import {RequestService} from '../RequestService';

export class CratesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public following(packageName: string): Promise<FollowingResult> {
    const endpoint = Endpoint.Crates.following(packageName);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public getAuthors(packageName: string, version: string): Promise<AuthorsResult> {
    const endpoint = Endpoint.Crates.authors(packageName, version);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve information of a crate.
   * @param packageName The package name
   */
  public getCrate(packageName: string): Promise<CrateResult> {
    const endpoint = Endpoint.Crates.crate(packageName);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve a page of crates, optionally constrained by a query.
   * @param query The search query
   * @param options The search options
   */
  public getCrates(query: string, options?: SearchOptions): Promise<SearchResult> {
    const endpoint = Endpoint.Crates.crates();
    return this.requestService.get(endpoint, {...options, query});
  }

  /**
   * Retrieve a download link for a certain version of a crate.
   * @param packageName The package name
   */
  public getDownloadUrl(packageName: string, version: string): Promise<UrlResult> {
    const endpoint = Endpoint.Crates.download(packageName, version);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve the dependencies of a crate version.
   * @param packageName The package name
   */
  public getDependencies(packageName: string): Promise<DependenciesResult> {
    const endpoint = Endpoint.Crates.dependencies(packageName);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve download stats for a crate.
   * @param packageName The package name
   */
  public getDownloads(packageName: string): Promise<DownloadsResult> {
    const endpoint = Endpoint.Crates.downloads(packageName);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public getOwners(packageName: string): Promise<UsersResult> {
    const endpoint = Endpoint.Crates.owners(packageName);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve the reverse dependencies of a crate version.
   * @param packageName The package name
   */
  public getReverseDependencies(packageName: string): Promise<ReverseDependenciesResult> {
    const endpoint = Endpoint.Crates.dependants(packageName);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve the team owner of a crate.
   * @param packageName The package name
   */
  public getTeamOwner(packageName: string): Promise<TeamsResult> {
    const endpoint = Endpoint.Crates.ownerTeam(packageName);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve the user owner of a crate.
   * @param packageName The package name
   */
  public getUserOwner(packageName: string): Promise<UsersResult> {
    const endpoint = Endpoint.Crates.ownerUser(packageName);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve a specific version of a crate.
   * @param packageName The package name
   */
  public getVersion(packageName: string, version: string): Promise<Version> {
    const endpoint = Endpoint.Crates.version(packageName, version);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve all versions of a crate.
   * @param packageName The package name
   */
  public getVersions(packageName: string): Promise<{versions: Version[]}> {
    const endpoint = Endpoint.Crates.versions(packageName);
    return this.requestService.get(endpoint);
  }
}
