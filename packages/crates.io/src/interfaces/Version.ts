export interface Version {
  crate_size: number;
  crate: string;
  created_at: string;
  dl_path: string;
  downloads: number;
  features: {
    [key: string]: string[];
  };
  id: number;
  license: string;
  links: {
    dependencies: string;
    version_downloads: string;
    authors: string;
  };
  num: string;
  published_by: null | string;
  readme_path: string;
  updated_at: string;
  yanked: boolean;
}
