import {Mention} from './Mention';

export interface Text {
  data: string;
  mentions?: Mention[];
}
