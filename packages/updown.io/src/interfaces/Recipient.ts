import type {RecipientType} from './Options';

export interface Recipient {
  id: string;
  immutable?: boolean;
  name?: string;
  type: RecipientType;
  value?: string;
}
