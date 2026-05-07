import type {ProjectDependency} from '../interfaces/Project';

export interface Repository {
  contributions_count: null | number;
  created_at: string;
  default_branch: string;
  description: string;
  fork: false;
  fork_policy: null | string;
  forks_count: number;
  full_name: string;
  github_contributions_count: number;
  github_id: string;
  has_audit: null | string;
  has_changelog: null | string;
  has_coc: null | string;
  has_contributing: null | string;
  has_issues: boolean;
  has_license: null | string;
  has_pages: boolean;
  has_readme: null | string;
  has_threat_model: null | string;
  has_wiki: boolean;
  homepage: string;
  host_domain: null | string;
  host_type: string;
  keywords: string[];
  language: string;
  last_synced_at: string;
  license: string;
  logo_url: null | string;
  mirror_url: null | string;
  name: null | string;
  open_issues_count: number;
  private: boolean;
  pull_requests_enabled: null | string;
  pushed_at: string;
  rank: number;
  scm: string;
  size: number;
  source_name: null | string;
  stargazers_count: number;
  status: null | string;
  subscribers_count: number;
  updated_at: string;
  uuid: string;
}

export interface RepositoryWithDependencies extends Repository {
  dependencies: ProjectDependency[];
}
