import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {
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

export class CratesAPI {
  private readonly apiClient: AxiosInstance;
  private apiKey?: string;

  constructor(apiClient: AxiosInstance, apiKey?: string) {
    this.apiClient = apiClient;
    this.apiKey = apiKey;
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public async following(packageName: string): Promise<FollowingResult> {
    const endpoint = Endpoint.Crates.following(packageName);
    if (!this.apiKey) {
      throw new Error('You need to set an API key to use this endpoint.');
    }

    const additionalConfig = {
      headers: {
        Authorization: this.apiKey,
      },
    };

    const {data} = await this.apiClient.get(endpoint, additionalConfig);
    return data;
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public async getAuthors(packageName: string, version: string): Promise<AuthorsResult> {
    const endpoint = Endpoint.Crates.authors(packageName, version);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve information of a crate.
   * @param packageName The package name
   */
  public async getCrate(packageName: string): Promise<CrateResult> {
    const endpoint = Endpoint.Crates.crate(packageName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve a page of crates, optionally constrained by a query.
   * @param query The search query
   * @param options The search options
   */
  public async getCrates(query: string, options?: SearchOptions): Promise<SearchResult> {
    const endpoint = Endpoint.Crates.crates();

    const additionalConfig = {
      params: {
        ...options,
        query,
      },
    };

    const {data} = await this.apiClient.get(endpoint, additionalConfig);
    return data;
  }

  /**
   * Retrieve the dependencies of a crate version.
   * @param packageName The package name
   */
  public async getDependencies(packageName: string): Promise<DependenciesResult> {
    const endpoint = Endpoint.Crates.dependencies(packageName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve download stats for a crate.
   * @param packageName The package name
   */
  public async getDownloads(packageName: string): Promise<DownloadsResult> {
    const endpoint = Endpoint.Crates.downloads(packageName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve a download link for a certain version of a crate.
   * @param packageName The package name
   */
  public async getDownloadUrl(packageName: string, version: string): Promise<UrlResult> {
    const endpoint = Endpoint.Crates.download(packageName, version);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public async getOwners(packageName: string): Promise<UsersResult> {
    const endpoint = Endpoint.Crates.owners(packageName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve the reverse dependencies of a crate version.
   * @param packageName The package name
   */
  public async getReverseDependencies(packageName: string): Promise<ReverseDependenciesResult> {
    const endpoint = Endpoint.Crates.reverseDependencies(packageName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve the team owner of a crate.
   * @param packageName The package name
   */
  public async getTeamOwner(packageName: string): Promise<TeamsResult> {
    const endpoint = Endpoint.Crates.ownerTeam(packageName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve the user owner of a crate.
   * @param packageName The package name
   */
  public async getUserOwner(packageName: string): Promise<UsersResult> {
    const endpoint = Endpoint.Crates.ownerUser(packageName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve a specific version of a crate.
   * @param packageName The package name
   */
  public async getVersion(packageName: string, version: string): Promise<Version> {
    const endpoint = Endpoint.Crates.version(packageName, version);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve all versions of a crate.
   * @param packageName The package name
   */
  public async getVersions(packageName: string): Promise<{versions: Version[]}> {
    const endpoint = Endpoint.Crates.versions(packageName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Set a new API key.
   * @param apiKey The API key
   */
  public setApiKey(apiKey: string): void {
    this.apiKey = apiKey;
  }
}
