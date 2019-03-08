import {Category, Crate, Dependency, Download, Keyword, Team, User, Version} from '.';

export interface AuthorsResult {
  meta: {
    names: string[];
  };
  users: string[];
}

export interface CrateResult {
  categories: Category[];
  crate: Crate;
  keywords: Keyword[];
}

export interface DependenciesResult {
  dependencies: Dependency[];
}

export interface DownloadsResult {
  version_downloads: Download[];
}

export interface FollowingResult {
  following: boolean;
}

export interface ReverseDependenciesResult extends DependenciesResult, VersionResult {
  meta: {
    total: number;
  };
}

export interface SearchResult {
  crates: Crate[];
  meta: {
    total: number;
  };
}

export interface UrlResult {
  url: string;
}

export interface UsersResult {
  users: User[];
}

export interface TeamsResult {
  teams: Team[];
}

export interface VersionsResult {
  versions: Version[];
}

export interface VersionResult {
  version: Version;
}
