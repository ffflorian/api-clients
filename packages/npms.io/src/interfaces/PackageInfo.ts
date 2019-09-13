export interface PackageInfo {
  /** The date in which the package was last analyzed */
  analyzedAt: string;
  /** The collected information from all sources */
  collected: Collected;
  /** The error associated with the last analyze attempt */
  error?: Error;
  /** The package evaluation */
  evaluation: Evaluation;
  /** The package score */
  score: Score;
}

interface Collected {
  metadata: Metadata;
  npm: Npm;
  source: Source;
}

interface Error {
  code: string;
  message: string;
}

interface Metadata {
  date: string;
  dependencies: Dependencies;
  description: string;
  hasSelectiveFiles: boolean;
  keywords: string[];
  license: string;
  links: Links;
  maintainers: Publisher[];
  name: string;
  publisher: Publisher;
  readme: string;
  releases: Release[];
  repository: Repository;
  scope: string;
  version: string;
}

interface Dependencies {
  'loose-envify': string;
  'object-assign': string;
  'prop-types': string;
}

interface Links {
  bugs: string;
  homepage: string;
  npm: string;
  repository: string;
}

interface Publisher {
  email: string;
  username: string;
}

interface Release {
  count: number;
  from: string;
  to: string;
}

interface Repository {
  directory: string;
  type: string;
  url: string;
}

interface Npm {
  dependentsCount: number;
  downloads: Release[];
  starsCount: number;
}

interface Source {
  badges: Badge[];
  coverage: number;
  files: Files;
  linters: string[];
}

interface Badge {
  info: Info;
  urls: Urls;
}

interface Info {
  modifiers?: Modifiers;
  service: string;
  type: string;
}

interface Modifiers {
  type: string;
}

interface Urls {
  content: string;
  original: string;
  service?: string;
  shields: string;
}

interface Files {
  hasChangelog: boolean;
  readmeSize: number;
  testsSize: number;
}

interface Evaluation {
  maintenance: Maintenance;
  popularity: Popularity;
  quality: Quality;
}

interface Maintenance {
  commitsFrequency: number;
  issuesDistribution: number;
  openIssues: number;
  releasesFrequency: number;
}

interface Popularity {
  communityInterest: number;
  dependentsCount: number;
  downloadsAcceleration: number;
  downloadsCount: number;
}

interface Quality {
  branding: number;
  carefulness: number;
  health: number;
  tests: number;
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
