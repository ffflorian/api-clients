import {AssetMeta} from './AssetMeta';

export interface Attachment {
  data?: string;
  duration?: number;
  height?: number;
  levels?: string[];
  meta?: AssetMeta;
  mimeType: string;
  name?: string;
  size: number;
  width?: number;
}
