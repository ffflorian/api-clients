import type {Bounds} from './Bounds';

export interface Editor extends Bounds {}

export interface EditorBeaconsLookup {
  ibeacons: Record<string, unknown>;
  wifi_beacons: Record<string, unknown>;
}

export type EditorGeometries = Array<[string, string] | Record<string, unknown>>;

export type GeometryStyles = Record<string, string>;
