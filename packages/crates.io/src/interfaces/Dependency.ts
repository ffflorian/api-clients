export interface Dependency {
  crate_id: string;
  default_features: boolean;
  downloads: number;
  features: string[];
  id: number;
  kind: 'build' | 'dev' | 'normal';
  optional: boolean;
  req: string;
  target: null | string;
  version_id: number;
}
