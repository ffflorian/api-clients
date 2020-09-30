import {Asset} from './Asset';
import {Service} from './Service';

export interface User {
  accent_id?: number;
  assets?: Asset[];
  handle?: string;
  id?: string;
  name?: string;
  service?: Service;
}
