import {CustomHeaders} from './Options';

export interface Check {
  alias: string;
  apdex_t: number;
  custom_headers: CustomHeaders;
  disabled_locations: string[];
  down_since: string | null;
  down: boolean;
  enabled: boolean;
  error: string | null;
  favicon_url: string | null;
  last_check_at: string;
  last_status: number;
  mute_until: string | null;
  next_check_at: string;
  period: number;
  published: boolean;
  ssl: {
    error: string | null;
    tested_at: string;
    valid: boolean;
  };
  string_match: number;
  token: string;
  uptime: number;
  url: string;
}
