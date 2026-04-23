import type {Category, Crate, Dependency, Download, Keyword, Team, User, Version} from '.';

export interface AuthorsResult {
  meta: {
    names: string[];
  };
  users: User[];
}

export interface CategoriesResult {
  categories: Category[];
  meta: {
    total: number;
  };
}

export interface CategoryResult {
  category: Category;
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
  meta?: {
    extra_downloads?: Download[];
  };
  version_downloads: Download[];
}

export interface FollowingResult {
  following: boolean;
}

export interface KeywordResult {
  keyword: Keyword;
}

export interface KeywordsResult {
  keywords: Keyword[];
  meta: {
    total: number;
  };
}

export interface OkResult {
  ok: boolean;
}

export interface ReverseDependenciesResult extends DependenciesResult {
  meta: {
    total: number;
  };
  versions: Version[];
}

export interface SearchResult {
  crates: Crate[];
  meta: {
    total: number;
  };
}

export interface TeamsResult {
  teams: Team[];
}

export interface UrlResult {
  url: string;
}

export interface UsersResult {
  users: User[];
}

export interface VersionResult {
  version: Version;
}

export interface VersionsResult {
  versions: Version[];
}
