export interface ClientOptions {
  apiUrl?: string;
}

export type HttpMethod = 'get' | 'head' | 'options' | 'post' | 'put';

export interface LevelListOptions {
  /** filter by group */
  group?: number | string;
  /** filter by on_top_of */
  on_top_of?: null | number | string;
}

export type RequestOptions = LevelListOptions;
