import type {CustomHeaders} from './Options';

export interface Check {
  alias: string;
  apdex_t: number;
  created_at: string;
  custom_headers: CustomHeaders;
  disabled_locations: string[];
  domain?: {
    expires_at: string;
    remaining_days: number;
    source: string;
    tested_at: string;
  };
  down: boolean;
  down_since: null | string;
  enabled: boolean;
  error: null | string;
  favicon_url: null | string;
  http_body: string;
  http_verb: string;
  last_check_at: string;
  last_status: null | number;
  mute_until: null | string;
  next_check_at: string;
  period: number;
  published: boolean;
  recipients: string[];
  ssl: {
    error: null | string;
    expires_at?: string;
    tested_at: string;
    valid: boolean;
  };
  string_match: string;
  token: string;
  type: string;
  up_since: null | string;
  uptime: number;
  url: string;
}
