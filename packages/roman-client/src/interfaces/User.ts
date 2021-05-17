import {Service} from './Service';
import {Asset} from './Asset';

export interface User {
  accent_id?: number;
  assets?: Asset[];
  handle?: string;
  id?: string;
  name?: string;
  service?: Service;
}
