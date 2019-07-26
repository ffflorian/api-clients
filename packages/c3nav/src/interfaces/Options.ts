export interface ClientOptions {
  apiUrl?: string;
}

export interface LevelListOptions {
  /** filter by group */
  group?: string | number;
  /** filter by on_top_of */
  on_top_of?: null | string | number;
}

export type RequestOptions = LevelListOptions;

export type HttpMethod = 'get' | 'head' | 'options' | 'post' | 'put';

export enum HttpStatus {
  FORBIDDEN = 403,
  NO_CONTENT = 204,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
}
