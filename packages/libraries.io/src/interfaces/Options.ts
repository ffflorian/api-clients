export type SortType =
  | 'contributions_count'
  | 'created_at'
  | 'dependent_repos_count'
  | 'dependents_count'
  | 'latest_release_published_at'
  | 'rank'
  | 'stars';

export interface FilterOptions {
  keywords?: string[];
  languages?: string[];
  licenses?: string[];
  platforms?: PlatformType[];
}

export interface ClientOptions {
  apiKey: string;
  apiUrl?: string;
}

export interface PreReleaseOptions {
  includePreRelease?: boolean;
}

export interface PaginationOptions {
  page?: number;
  per_page?: number;
}

export interface SearchOptions extends PaginationOptions {
  filter?: FilterOptions;
  /** sort by */
  sort?: SortType;
}

export interface RequestOptions extends SearchOptions, PreReleaseOptions {
  api_key?: string;
  platform?: PlatformType;
  /** query */
  q?: string;
}

export type HttpMethod = 'delete' | 'get' | 'post' | 'put';

export enum HttpStatus {
  FORBIDDEN = 403,
  NO_CONTENT = 204,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
}

export type PlatformType =
  | 'alcatraz'
  | 'atom'
  | 'bower'
  | 'cargo'
  | 'carthage'
  | 'clojars'
  | 'cocoapods'
  | 'cpan'
  | 'cran'
  | 'dub'
  | 'elm'
  | 'emacs'
  | 'go'
  | 'hackage'
  | 'haxelib'
  | 'hex'
  | 'homebrew'
  | 'inqlude'
  | 'julia'
  | 'maven'
  | 'meteor'
  | 'nimble'
  | 'npm'
  | 'nuget'
  | 'packagist'
  | 'platformio'
  | 'pub'
  | 'puppet'
  | 'purescript'
  | 'pypi'
  | 'racket'
  | 'rubygems'
  | 'sublime'
  | 'swiftpm'
  | 'wordpress';
