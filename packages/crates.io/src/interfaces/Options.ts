export interface ClientOptions {
  apiKey?: string;
  apiUrl?: string;
}

export enum HttpStatus {
  FORBIDDEN = 403,
  NO_CONTENT = 204,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
}

export interface SearchOptions {
  page?: number;
  per_page?: number;
  sort?: string;
}

export interface RequestOptions extends SearchOptions {
  query?: string;
  token?: string;
}
