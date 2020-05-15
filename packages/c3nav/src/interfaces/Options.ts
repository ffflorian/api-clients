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
