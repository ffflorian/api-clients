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
    const endpoint = Endpoint.Crates.following(packageName);
    if (!this.apiKey) {
      throw new Error('You need to set an API key to use this endpoint.');
    }

    const additionalConfig = {
      headers: {
        Authorization: this.apiKey,
      },
    };

    const response = await fetch(new URL(endpoint, this.baseURL), additionalConfig);
    return response.json();
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public async getAuthors(packageName: string, version: string): Promise<AuthorsResult> {
    const endpoint = Endpoint.Crates.authors(packageName, version);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve information of a crate.
   * @param packageName The package name
   */
  public async getCrate(packageName: string): Promise<CrateResult> {
    const endpoint = Endpoint.Crates.crate(packageName);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve a page of crates, optionally constrained by a query.
   * @param query The search query
   * @param options The search options
   */
  public async getCrates(query: string, options?: SearchOptions): Promise<SearchResult> {
    const endpoint = Endpoint.Crates.crates();

    const params: Record<string, string> = {
      // eslint-disable-next-line id-length
      q: query,
    };

    for (const optionName of Object.keys(options || {})) {
      params[optionName] = String(options?.[optionName as keyof SearchOptions] || '');
    }

    const url = new URL(endpoint, this.baseURL);
    if (options) {
      url.search = new URLSearchParams(params as Record<string, string>).toString();
    }
    const response = await fetch(url);
    return response.json();
  }

  /**
   * Retrieve the dependencies of a crate version.
   * @param packageName The package name
   */
  public async getDependencies(packageName: string): Promise<DependenciesResult> {
    const endpoint = Endpoint.Crates.dependencies(packageName);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve download stats for a crate.
   * @param packageName The package name
   */
  public async getDownloads(packageName: string): Promise<DownloadsResult> {
    const endpoint = Endpoint.Crates.downloads(packageName);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve a download link for a certain version of a crate.
   * @param packageName The package name
   */
  public async getDownloadUrl(packageName: string, version: string): Promise<UrlResult> {
    const endpoint = Endpoint.Crates.download(packageName, version);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve the owners of a crate.
   * @param packageName The package name
   */
  public async getOwners(packageName: string): Promise<UsersResult> {
    const endpoint = Endpoint.Crates.owners(packageName);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve the reverse dependencies of a crate version.
   * @param packageName The package name
   */
  public async getReverseDependencies(packageName: string): Promise<ReverseDependenciesResult> {
    const endpoint = Endpoint.Crates.reverseDependencies(packageName);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve the team owner of a crate.
   * @param packageName The package name
   */
  public async getTeamOwner(packageName: string): Promise<TeamsResult> {
    const endpoint = Endpoint.Crates.ownerTeam(packageName);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve the user owner of a crate.
   * @param packageName The package name
   */
  public async getUserOwner(packageName: string): Promise<UsersResult> {
    const endpoint = Endpoint.Crates.ownerUser(packageName);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve a specific version of a crate.
   * @param packageName The package name
   */
  public async getVersion(packageName: string, version: string): Promise<Version> {
    const endpoint = Endpoint.Crates.version(packageName, version);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  /**
   * Retrieve all versions of a crate.
   * @param packageName The package name
   */
  public async getVersions(packageName: string): Promise<{versions: Version[]}> {
    const endpoint = Endpoint.Crates.versions(packageName);
    const response = await fetch(new URL(endpoint, this.baseURL));
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
