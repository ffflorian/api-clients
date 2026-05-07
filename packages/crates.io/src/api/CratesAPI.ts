import type {APIClient} from '@ffflorian/api-client';

import type {
  AuthorsResult,
  CategoriesResult,
  CategoryResult,
  CrateResult,
  DependenciesResult,
  DownloadsResult,
  FollowingResult,
  KeywordResult,
  KeywordsResult,
  OkResult,
  PaginationOptions,
  ReverseDependenciesResult,
  SearchOptions,
  SearchResult,
  TeamsResult,
  UrlResult,
  UsersResult,
  Version,
  VersionResult,
  VersionsResult,
} from '../interfaces/';

import {Endpoint} from '../Endpoints';

export class CratesAPI {
  private readonly apiClient: APIClient;
  private apiKey?: string;

  constructor(apiClient: APIClient, apiKey?: string) {
    this.apiClient = apiClient;
    this.apiKey = apiKey;
  }

  /**
   * Follow a crate.
   * @param packageName The package name
   */
  public async follow(packageName: string): Promise<OkResult> {
    const endpoint = Endpoint.Crates.follow(packageName);
    if (!this.apiKey) {
      throw new Error('You need to set an API key to use this endpoint.');
    }

    const additionalConfig = {
      headers: {
        Authorization: this.apiKey,
      },
    };

    const {data} = await this.apiClient.put(endpoint, undefined, additionalConfig);
    return data;
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
   * Retrieve categories.
   * @param options Pagination options
   */
  public async getCategories(options?: PaginationOptions): Promise<CategoriesResult> {
    const endpoint = Endpoint.Categories.categories();

    const additionalConfig = {
      params: {
        ...options,
      },
    };

    const {data} = await this.apiClient.get(endpoint, additionalConfig);
    return data;
  }

  /**
   * Retrieve a category.
   * @param category The category slug
   */
  public async getCategory(category: string): Promise<CategoryResult> {
    const endpoint = Endpoint.Categories.category(category);
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
        // eslint-disable-next-line id-length
        q: query,
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
   * Retrieve a keyword.
   * @param keyword The keyword
   */
  public async getKeyword(keyword: string): Promise<KeywordResult> {
    const endpoint = Endpoint.Keywords.keyword(keyword);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve keywords.
   * @param options Pagination options
   */
  public async getKeywords(options?: PaginationOptions): Promise<KeywordsResult> {
    const endpoint = Endpoint.Keywords.keywords();

    const additionalConfig = {
      params: {
        ...options,
      },
    };

    const {data} = await this.apiClient.get(endpoint, additionalConfig);
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
    const {data} = await this.apiClient.get<VersionResult>(endpoint);
    return data.version;
  }

  /**
   * Retrieve the dependencies of a specific crate version.
   * @param packageName The package name
   * @param version The version
   */
  public async getVersionDependencies(packageName: string, version: string): Promise<DependenciesResult> {
    const endpoint = Endpoint.Crates.dependenciesByVersion(packageName, version);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve download stats for a specific crate version.
   * @param packageName The package name
   * @param version The version
   */
  public async getVersionDownloads(packageName: string, version: string): Promise<DownloadsResult> {
    const endpoint = Endpoint.Crates.versionDownloads(packageName, version);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Retrieve all versions of a crate.
   * @param packageName The package name
   */
  public async getVersions(packageName: string): Promise<VersionsResult> {
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

  /**
   * Unfollow a crate.
   * @param packageName The package name
   */
  public async unfollow(packageName: string): Promise<OkResult> {
    const endpoint = Endpoint.Crates.follow(packageName);
    if (!this.apiKey) {
      throw new Error('You need to set an API key to use this endpoint.');
    }

    const additionalConfig = {
      headers: {
        Authorization: this.apiKey,
      },
    };

    const {data} = await this.apiClient.delete(endpoint, additionalConfig);
    return data;
  }

  /**
   * Unyank a specific crate version.
   * @param packageName The package name
   * @param version The version
   */
  public async unyank(packageName: string, version: string): Promise<OkResult> {
    const endpoint = Endpoint.Crates.unyank(packageName, version);
    if (!this.apiKey) {
      throw new Error('You need to set an API key to use this endpoint.');
    }

    const additionalConfig = {
      headers: {
        Authorization: this.apiKey,
      },
    };

    const {data} = await this.apiClient.put(endpoint, undefined, additionalConfig);
    return data;
  }

  /**
   * Yank a specific crate version.
   * @param packageName The package name
   * @param version The version
   */
  public async yank(packageName: string, version: string): Promise<OkResult> {
    const endpoint = Endpoint.Crates.yank(packageName, version);
    if (!this.apiKey) {
      throw new Error('You need to set an API key to use this endpoint.');
    }

    const additionalConfig = {
      headers: {
        Authorization: this.apiKey,
      },
    };

    const {data} = await this.apiClient.delete(endpoint, additionalConfig);
    return data;
  }
}
