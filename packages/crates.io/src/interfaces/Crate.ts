export interface Crate {
  badges: {
    [key: string]: {
      [key: string]: string;
    };
  } | null;
  categories: string | null;
  created_at: string;
  description: string;
  documentation: string | null;
  downloads: number;
  exact_match: boolean;
  homepage: string | null;
  id: string;
  keywords: string | null;
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
  recent_downloads: number | null;
  repository: string | null;
  updated_at: string;
  versions: number[] | null;
}
