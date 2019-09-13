export interface SearchResult {
  results: Result[];
  total: number;
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

interface Flags {
  deprecated?: boolean;
  insecure?: boolean;
  unstable?: boolean;
}

interface Package {
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

interface Author {
  email?: string;
  name: string;
  url?: string;
  username?: string;
}

interface Links {
  bugs?: string;
  homepage?: string;
  npm: string;
  repository?: string;
}

interface Publisher {
  email: string;
  username: string;
}

interface Score {
  detail: Detail;
  final: number;
}

interface Detail {
  maintenance: number;
  popularity: number;
  quality: number;
}
