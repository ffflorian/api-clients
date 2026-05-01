import type {StatusPageVisibility} from './Options';

export interface StatusPage {
  access_key: null | string;
  checks: string[];
  description: null | string;
  name: string;
  token: string;
  url: string;
  visibility: StatusPageVisibility;
}
