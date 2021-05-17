import {Attachment} from './Attachment';
import {Poll} from './Poll';
import {Text} from './Text';
import {Call} from './Call';

export interface IncomingMessage {
  attachment?: Attachment;
  call?: Call;
  poll?: Poll;
  text?: Text;
  type: string;
}
