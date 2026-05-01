export interface MeshFirmware {
  builds: Array<Record<string, unknown>>;
  created: string;
  id: number;
  idf_version: string;
  project_name: string;
  version: string;
}

export interface MeshListResponse<T> {
  count: number;
  items: T[];
}

export interface MeshMap {
  connections: Array<Record<string, unknown>>;
  ranges: Array<Record<string, unknown>>;
  ranging_beacons: Array<Record<string, unknown>>;
}

export interface MeshMessage {
  data: Record<string, unknown>;
  datetime: string;
  id: number;
  message_type: string;
  src_node: string;
}
