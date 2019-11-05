import {ChecksAPI, NodesAPI} from '../api/';

export interface API {
  checks: ChecksAPI;
  nodes: NodesAPI;
}
