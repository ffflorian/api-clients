import {Text} from './Text';
import {Attachment} from './Attachment';
import {Poll} from './Poll';
import {Call} from './Call';

export interface OutgoingMessage {
  attachment?: Attachment;
  botId: string;
  call?: Call;
  conversation?: string;
  conversationId?: string;
  emoji?: string;
  handle?: string;
  locale?: string;
  messageId?: string;
  poll?: Poll;
  refMessageId?: string;
  text?: Text;
  token?: string;
  type: string;
  userId: string;
}
