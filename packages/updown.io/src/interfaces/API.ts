import {ChecksAPI, NodesAPI, RecipientsAPI, StatusPagesAPI} from '../api/';

export interface API {
  checks: ChecksAPI;
  nodes: NodesAPI;
  recipients: RecipientsAPI;
  statusPages: StatusPagesAPI;
}
