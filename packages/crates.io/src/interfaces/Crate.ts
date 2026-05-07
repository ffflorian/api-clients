export interface Crate {
  badges: object[];
  categories: null | string[];
  created_at: string;
  description: null | string;
  documentation: null | string;
  downloads: number;
  exact_match: boolean;
  homepage: null | string;
  id: string;
  keywords: null | string[];
  links: {
    owner_team: string;
    owner_user: string;
    owners: string;
    reverse_dependencies: string;
    version_downloads: string;
    versions: string;
  };
  max_version: string;
  name: string;
  recent_downloads: null | number;
  repository: null | string;
  trustpub_only: boolean;
  updated_at: string;
  versions: null | number[];
  yanked: boolean;
}
