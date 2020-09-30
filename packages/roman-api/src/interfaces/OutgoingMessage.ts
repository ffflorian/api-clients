import {Mention} from './Mention';
import {Poll} from './Poll';

export interface OutgoingMessage {
  attachment?: string;
  botId: string;
  conversationId?: string;
  handle?: string;
  image?: string;
  locale?: string;
  mentions?: Mention[];
  messageId?: string;
  mimeType?: string;
  poll?: Poll;
  refMessageId?: string;
  text?: string;
  token?: string;
  type: string;
  userId: string;
}
