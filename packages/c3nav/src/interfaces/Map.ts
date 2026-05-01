import type {Location, LocationDetails, LocationGeometry} from './Location';

export interface MapLegend {
  base: MapLegendItem[];
  groups: MapLegendItem[];
  obstacles: MapLegendItem[];
}

export interface MapLegendItem {
  border: string;
  fill: string;
  title: string;
}

export type MapLocation = Location;

export type MapLocationDisplay = LocationDetails;

export type MapLocationGeometry = LocationGeometry;

export interface MapLocationOptions extends MapLocationQueryOptions {
  full?: boolean;
  showRedirects?: boolean;
}

export interface MapLocationQueryOptions {
  geometry?: boolean;
  searchable?: boolean;
}

export interface MapSettings {
  grid?: null | Record<string, unknown>;
  initial_bounds: Array<[number, number]> | null;
  initial_level: null | number;
  tile_server?: null | string;
}

export interface Position {
  available: boolean;
  effective_slug: string;
  icon: null | string;
  id: number | string;
  short_name: string;
  slug: string;
  subtitle: string;
  title: string;
}
export interface Projection {
  pipeline?: null | string;
  proj4: string;
  rotation: number;
  rotation_matrix?: null | number[];
  zero_point: [number, number];
}
export interface Quest {
  identifier: string;
  level_id: number;
  point: {
    coordinates: [number, number];
    type: 'Point';
  };
  quest_type: string;
}
