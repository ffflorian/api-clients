import {PlatformType} from './Options';

export interface Project {
  dependent_repos_count: number;
  dependents_count: number;
  description: string | null;
  forks: number;
  homepage: string | null;
  keywords: string[];
  language: string;
  latest_download_url: string;
  latest_release_number: string;
  latest_release_published_at: string;
  latest_stable_release: ProjectRelease;
  name: string;
  normalized_licenses: string[];
  package_manager_url: string;
  platform: string;
  rank: number;
  repository_url: string | null;
  stars: number;
  status: string | null;
  versions: ProjectVersion[];
}

export interface ProjectWithDependencies extends Project {
  dependencies_for_version: string;
  dependencies: ProjectDependency[];
  dependent_repos_count: number;
  dependents_count: number;
}

export interface ProjectDependency {
  deprecated: boolean;
  filepath: string | null;
  kind: 'Development' | 'runtime' | 'Optional';
  latest_stable: string;
  latest: string;
  name: string;
  outdated: boolean;
  platform: PlatformType;
  project_name: string;
  requirements: string;
}

export interface ProjectRelease {
  created_at: string;
  id: number;
  number: string;
  project_id: number;
  published_at: string;
  runtime_dependencies_count: number | null;
  updated_at: string;
}

export interface ProjectUsage {
  [version: string]: number;
}

export interface ProjectVersion {
  published_at: string;
  number: string;
}
