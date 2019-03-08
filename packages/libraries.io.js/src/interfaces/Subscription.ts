import {Project} from './Project';

export interface Subscription {
  include_prerelease: boolean;
  created_at: string;
  updated_at: string;
  project: Project;
}
