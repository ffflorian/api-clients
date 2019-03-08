export enum HttpStatus {
  'FORBIDDEN' = 403,
  'NOT_FOUND' = 404,
  'UNAUTHORIZED' = 401,
}

export type HttpMethod = 'delete' | 'get' | 'post' | 'put';

export interface ClientOptions {
  apiKey: string;
  apiKeyId: string;
  apiUrl?: string;
}

export interface RequestOptions {}
