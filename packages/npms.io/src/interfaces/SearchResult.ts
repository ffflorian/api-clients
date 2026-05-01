export interface Author {
  email?: string;
  name: string;
  url?: string;
  username?: string;
}

export interface Flags {
  deprecated?: boolean;
  insecure?: boolean;
  unstable?: boolean;
}

export interface Package {
  author?: Author;
  date: string;
  description: string;
  keywords?: string[];
  links: Links;
  maintainers: Publisher[];
  name: string;
  publisher: Publisher;
  scope: string;
  version: string;
}

export interface Publisher {
  email: string;
  username: string;
}

export interface Result {
  /** The package flags (deprecated, unstable, insecure) */
  flags?: Flags;
  /** The package data which contains the name, version and other useful information */
  package: Package;
  /** The package score */
  score: Score;
  /** The computed search score (from Elasticsearch) */
  searchScore: number;
}

export interface SearchResult {
  results: Result[];
  total: number;
}

export interface SuggestionResult extends Result {
  /** A string containing highlighted matched text */
  highlight?: string;
}

export type SuggestionsResult = SuggestionResult[];

interface Detail {
  maintenance: number;
  popularity: number;
  quality: number;
}

interface Links {
  bugs?: string;
  homepage?: string;
  npm: string;
  repository?: string;
}

interface Score {
  detail: Detail;
  final: number;
}
