import {Attachment} from './Attachment';
import {Poll} from './Poll';
import {Text} from './Text';

export interface IncomingMessage {
  attachment?: Attachment;
  poll?: Poll;
  text?: Text;
  type: string;
}
