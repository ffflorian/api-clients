import {URL} from 'url';

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
  apiUrl?: URL;
}

export interface PreReleaseOptions {
  includePreRelease?: boolean;
}

export interface PaginationOptions {
  page?: number;
  perPage?: number;
}

export interface SearchOptions extends PaginationOptions {
  sortBy?: SortType;
  filter?: FilterOptions;
}

export interface RequestOptions extends SearchOptions, PreReleaseOptions {
  apiKey?: string;
  platform?: PlatformType;
  query?: string;
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
