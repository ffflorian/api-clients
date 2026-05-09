export interface PositioningLocateRequest {
  ibeacon_peers: Array<Record<string, unknown>>;
  wifi_peers: Array<Record<string, unknown>>;
}

export interface PositioningLocateResponse {
  location: null | Record<string, unknown>;
  precision: null | number;
  suggested_peers: PositioningPeerSuggestion[];
}

export interface PositioningPeerSuggestion {
  bssid: string;
  frequencies: number[];
}
