import {ProjectDependency} from '../interfaces/Project';

export interface Repository {
  contributions_count: number | null;
  created_at: string;
  default_branch: string;
  description: string;
  fork_policy: string | null;
  fork: false;
  forks_count: number;
  full_name: string;
  github_contributions_count: number;
  github_id: string;
  has_audit: string | null;
  has_changelog: string | null;
  has_coc: string | null;
  has_contributing: string | null;
  has_issues: boolean;
  has_license: string | null;
  has_pages: boolean;
  has_readme: string | null;
  has_threat_model: string | null;
  has_wiki: boolean;
  homepage: string;
  host_domain: string | null;
  host_type: string;
  keywords: string[];
  language: string;
  last_synced_at: string;
  license: string;
  logo_url: string | null;
  mirror_url: string | null;
  name: string | null;
  open_issues_count: number;
  private: boolean;
  pull_requests_enabled: string | null;
  pushed_at: string;
  rank: number;
  scm: string;
  size: number;
  source_name: string | null;
  stargazers_count: number;
  status: string | null;
  subscribers_count: number;
  updated_at: string;
  uuid: string;
}

export interface RepositoryWithDependencies extends Repository {
  dependencies: ProjectDependency[];
}
