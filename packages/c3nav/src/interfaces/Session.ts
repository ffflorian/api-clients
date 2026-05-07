export interface Session {
  key_type: 'anonymous' | 'secret' | 'session';
  readonly: boolean;
  scopes: string[];
}

export interface SessionKey {
  key: string;
}
