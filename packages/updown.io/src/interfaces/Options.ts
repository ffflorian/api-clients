export interface CheckOptions {
  /** Human readable name */
  alias?: string;
  /** APDEX threshold in seconds (0.125, 0.25, 0.5, 1.0 or 2.0) */
  apdex_t?: number;
  custom_headers?: CustomHeaders;
  /** The HTTP headers you want in updown requests. Ex: custom_headers[X-Api-Key]=xxxxxxxxx */
  customHeaders?: CustomHeaders;
  disabled_locations?: string[];
  /** Disabled monitoring locations. It's an array of abbreviated location names. Can be any of these: ["lan", "mia", "bhs", "gra", "fra", "sin", "tok", "syd"]. Ex: disabled_locations[]=lan&disabled_locations[]=syd */
  disabledLocations?: string[];
  /** Is the check enabled (true or false) */
  enabled?: boolean;
  /** The HTTP body sent alongside the request */
  http_body?: string;
  /** The HTTP verb used to perform the request */
  http_verb?: HttpVerb;
  /** Mute notifications until given time, accepts a time, 'recovery' or 'forever' */
  mute_until?: string;
  /** Interval in seconds (15, 30, 60, 120, 300, 600, 1800 or 3600) */
  period?: number;
  /** Shall the status page be public (true or false) */
  published?: boolean;
  /** Selected alert recipients */
  recipients?: string[];
  /** Search for this string in the page */
  string_match?: string;
  /** The type of check to create */
  type?: CheckType;
}

export type CheckType = 'http' | 'https' | 'icmp' | 'pulse' | 'tcp' | 'tcps';

export interface ClientOptions {
  apiKey: string;
  apiUrl?: string;
}

export interface CustomHeaders {
  [key: string]: boolean | number | string;
}

export type HttpMethod = 'delete' | 'get' | 'post' | 'put';

export type HttpVerb = 'DELETE' | 'GET/HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
export type MetricsGroup = 'host' | 'time';
export interface MetricsOptions {
  /** Start time, default to 1 month ago */
  from?: string;
  /** Group data by 'time' (hour) or 'host' (location) */
  group: MetricsGroup;
  /** End time, default to now */
  to?: string;
}
export interface RecipientOptions {
  /** Optional user-friendly label for supported recipient types */
  name?: string;
  /** Initial state on all existing checks */
  selected?: boolean;
  /** Type of recipient */
  type: RecipientType;
  /** Recipient value (email, phone or URL) */
  value: string;
}
export type RecipientType = 'email' | 'msteams' | 'slack_compatible' | 'sms' | 'webhook';

export interface RequestOptions {
  alias?: string;
  apdex_t?: number;
  'api-key'?: string;
  custom_headers?: CustomHeaders;
  disabled_locations?: string[];
  enabled?: boolean;
  from?: string;
  group?: MetricsGroup;
  http_body?: string;
  http_verb?: HttpVerb;
  metrics?: boolean;
  mute_until?: string;
  page?: number;
  period?: number;
  published?: boolean;
  recipients?: string[];
  string_match?: string;
  to?: string;
  type?: CheckType;
  url?: string;
}

export interface StatusPageOptions {
  /** Access key for protected pages */
  access_key?: string;
  /** List of checks to show in the page */
  checks?: string[];
  /** Description text */
  description?: string;
  /** Name of the status page */
  name?: string;
  /** Page visibility */
  visibility?: StatusPageVisibility;
}

export type StatusPageVisibility = 'private' | 'protected' | 'public';
