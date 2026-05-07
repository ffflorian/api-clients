export interface ClientOptions {
  apiKey: string;
  apiUrl?: string;
}

export interface FilterOptions {
  keywords?: string[];
  languages?: string[];
  licenses?: string[];
  platforms?: PlatformType[];
}

export type HttpMethod = 'delete' | 'get' | 'post' | 'put';

export interface PaginationOptions {
  page?: number;
  per_page?: number;
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

export interface PreReleaseOptions {
  includePreRelease?: boolean;
}

export interface RequestOptions extends PreReleaseOptions, SearchOptions {
  api_key?: string;
  platform?: PlatformType;
  /** query */
  q?: string;
}

export interface SearchOptions extends PaginationOptions {
  filter?: FilterOptions;
  /** sort by */
  sort?: SortType;
}

export type SortType =
  | 'contributions_count'
  | 'created_at'
  | 'dependent_repos_count'
  | 'dependents_count'
  | 'latest_release_published_at'
  | 'rank'
  | 'stars';
