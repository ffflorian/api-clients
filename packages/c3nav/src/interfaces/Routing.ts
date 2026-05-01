import type {Location} from './Location';

export interface Routing {
  options?: RoutingOptions;
  report_issue_url?: string;
  request?: RoutingRequest;
  result?: RoutingResult;
}

export interface RoutingOptions {
  mode: 'fastest' | 'shortest';
  restrictions: 'avoid' | 'normal' | 'prefer';
  walk_speed: 'default' | 'fast' | 'slow';
  way_types: Record<string, 'allow' | 'avoid' | 'restrict'>;
}

export interface RoutingOptionsFormItem {
  choices: Array<{name: string; title: string}>;
  label: string;
  name: string;
  type: string;
  value: string;
  value_display: string;
}

export interface RoutingRequest {
  destination: number | string;
  options_override?: Partial<RoutingOptions>;
  origin: number | string;
}

export interface RoutingResult {
  destination: Location;
  distance: number;
  distance_str: string;
  duration: number;
  duration_str: string;
  items: RoutingResultItem[];
  options_summary?: string;
  origin: Location;
  summary?: string;
}

export interface RoutingResultItem {
  coordinates: [number, number, number];
  descriptions?: unknown[];
  id: number;
  level?: Record<string, unknown>;
  space?: Record<string, unknown>;
  waytype?: Record<string, unknown>;
}
