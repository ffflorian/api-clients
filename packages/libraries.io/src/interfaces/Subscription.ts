import type {Project} from './Project';

export interface Subscription {
  created_at: string;
  include_prerelease: boolean;
  project: Project;
  updated_at: string;
}
