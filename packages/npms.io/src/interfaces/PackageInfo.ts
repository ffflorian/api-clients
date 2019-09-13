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

interface Badge {
  info: Info;
  urls: Urls;
}

interface Collected {
  github?: GitHub;
  metadata: Metadata;
  npm: Npm;
  source?: Source;
}

interface Contributor {
  commitsCount: number;
  username: string;
}

interface Detail {
  maintenance: number;
  popularity: number;
  quality: number;
}

interface Error {
  code: string;
  message: string;
}

interface Evaluation {
  maintenance: Maintenance;
  popularity: Popularity;
  quality: Quality;
}

interface Files {
  hasChangelog: boolean;
  readmeSize: number;
  testsSize: number;
}

interface GitHub {
  commits: Release[];
  contributors: Contributor[];
  forksCount: number;
  homepage?: string;
  issues: Issues;
  starsCount: number;
  statuses: Status[];
  subscribersCount: number;
}

interface Issues {
  count: number;
  distribution: Record<string, number>;
  isDisabled: boolean;
  openCount: number;
}

interface Info {
  modifiers?: Modifiers;
  service: string;
  type: string;
}

interface Links {
  bugs?: string;
  homepage?: string;
  npm: string;
  repository?: string;
}

interface Maintenance {
  commitsFrequency: number;
  issuesDistribution: number;
  openIssues: number;
  releasesFrequency: number;
}

interface Metadata {
  date: string;
  dependencies: Record<string, string>;
  description: string;
  hasSelectiveFiles?: boolean;
  hasTestScript?: boolean;
  keywords: string[];
  license: string;
  links: Links;
  maintainers: Publisher[];
  name: string;
  publisher: Publisher;
  readme?: string;
  releases: Release[];
  repository: Repository;
  scope: string;
  version: string;
}

interface Modifiers {
  type: string;
}

interface Npm {
  dependentsCount: number;
  downloads: Release[];
  starsCount: number;
}

interface Popularity {
  communityInterest: number;
  dependentsCount: number;
  downloadsAcceleration: number;
  downloadsCount: number;
}

interface Publisher {
  email?: string;
  username: string;
}

interface Quality {
  branding: number;
  carefulness: number;
  health: number;
  tests: number;
}

interface Release {
  count: number;
  from: string;
  to: string;
}

interface Repository {
  directory: string;
  type?: string;
  url: string;
}

interface Score {
  detail: Detail;
  final: number;
}

interface Source {
  badges: Badge[];
  coverage: number;
  files: Files;
  linters: string[];
}

interface Status {
  context: string;
  state: string;
}

interface Urls {
  content: string;
  original: string;
  service?: string;
  shields: string;
}
