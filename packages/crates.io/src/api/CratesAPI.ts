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
  constructor(
    private readonly baseURL: string,
    private apiKey?: string
  ) {}

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public async following(packageName: string): Promise<FollowingResult> {
    const endpoint = new URL(Endpoint.Crates.following(packageName), this.baseURL);
    if (!this.apiKey) {
      throw new Error('You need to set an API key to use this endpoint.');
    }

    const additionalConfig = {
      headers: {
        Authorization: this.apiKey,
      },
    };

    const response = await fetch(endpoint, additionalConfig);
    if (!response.ok) {
      throw new Error(
        `Failed to retrieve following status for crate ${packageName}: ${response.statusText}`,
      );
    }
    return response.json();
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public async getAuthors(packageName: string, version: string): Promise<AuthorsResult> {
    const endpoint = new URL(Endpoint.Crates.authors(packageName, version), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve authors for crate ${packageName} version ${version}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve information of a crate.
   * @param packageName The package name
   */
  public async getCrate(packageName: string): Promise<CrateResult> {
    const endpoint = new URL(Endpoint.Crates.crate(packageName), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve crate ${packageName}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve a page of crates, optionally constrained by a query.
   * @param query The search query
   * @param options The search options
   */
  public async getCrates(query: string, options?: SearchOptions): Promise<SearchResult> {
    const endpoint = new URL(Endpoint.Crates.crates(), this.baseURL);
    const params = new URLSearchParams();
    params.append('q', query);

    if (options) {
      if (options.page) {
        params.append('page', options.page.toString());
      }
      if (options.per_page) {
        params.append('per_page', options.per_page.toString());
      }
      if (options.sort) {
        params.append('sort', options.sort);
      }
    }

    endpoint.search = params.toString();

    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to search crates with query "${query}": ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve the dependencies of a crate version.
   * @param packageName The package name
   */
  public async getDependencies(packageName: string): Promise<DependenciesResult> {
    const endpoint = new URL(Endpoint.Crates.dependencies(packageName), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve dependencies for crate ${packageName}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve download stats for a crate.
   * @param packageName The package name
   */
  public async getDownloads(packageName: string): Promise<DownloadsResult> {
    const endpoint = new URL(Endpoint.Crates.downloads(packageName), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve downloads for crate ${packageName}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve a download link for a certain version of a crate.
   * @param packageName The package name
   */
  public async getDownloadUrl(packageName: string, version: string): Promise<UrlResult> {
    const endpoint = new URL(Endpoint.Crates.download(packageName, version), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve download URL for crate ${packageName} version ${version}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public async getOwners(packageName: string): Promise<UsersResult> {
    const endpoint = new URL(Endpoint.Crates.owners(packageName), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve owners for crate ${packageName}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve the reverse dependencies of a crate version.
   * @param packageName The package name
   */
  public async getReverseDependencies(packageName: string): Promise<ReverseDependenciesResult> {
    const endpoint = new URL(Endpoint.Crates.reverseDependencies(packageName), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve reverse dependencies for crate ${packageName}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve the team owner of a crate.
   * @param packageName The package name
   */
  public async getTeamOwner(packageName: string): Promise<TeamsResult> {
    const endpoint = new URL(Endpoint.Crates.ownerTeam(packageName), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve team owner for crate ${packageName}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve the user owner of a crate.
   * @param packageName The package name
   */
  public async getUserOwner(packageName: string): Promise<UsersResult> {
    const endpoint = new URL(Endpoint.Crates.ownerUser(packageName), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve user owner for crate ${packageName}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve a specific version of a crate.
   * @param packageName The package name
   */
  public async getVersion(packageName: string, version: string): Promise<Version> {
    const endpoint = new URL(Endpoint.Crates.version(packageName, version), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve version ${version} for crate ${packageName}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve all versions of a crate.
   * @param packageName The package name
   */
  public async getVersions(packageName: string): Promise<{versions: Version[]}> {
    const endpoint = new URL(Endpoint.Crates.versions(packageName), this.baseURL);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve versions for crate ${packageName}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Set a new API key.
   * @param apiKey The API key
   */
  public setApiKey(apiKey: string): void {
    this.apiKey = apiKey;
  }
}
