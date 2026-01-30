import type {CustomHeaders} from './Options';

export interface Check {
  alias: string;
  apdex_t: number;
  custom_headers: CustomHeaders;
  disabled_locations: string[];
  down: boolean;
  down_since: null | string;
  enabled: boolean;
  error: null | string;
  favicon_url: null | string;
  last_check_at: string;
  last_status: number;
  mute_until: null | string;
  next_check_at: string;
  period: number;
  published: boolean;
  ssl: {
    error: null | string;
    tested_at: string;
    valid: boolean;
  };
  string_match: number;
  token: string;
  uptime: number;
  url: string;
}
