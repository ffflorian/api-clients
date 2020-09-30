import {Member} from './Member';

export interface Conversation {
  creator?: string;
  id?: string;
  members?: Member[];
  name?: string;
}
