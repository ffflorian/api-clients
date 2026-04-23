import type {User} from './User';

export interface Version {
  crate: string;
  crate_size: number;
  created_at: string;
  dl_path: string;
  downloads: number;
  features: {
    [key: string]: string[];
  };
  id: number;
  license: string;
  links: {
    authors: string;
    dependencies: string;
    version_downloads: string;
  };
  num: string;
  published_by: null | User;
  readme_path: string;
  updated_at: string;
  yanked: boolean;
}
