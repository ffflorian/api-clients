export interface ClientOptions {
  apiKey?: string;
  apiUrl?: string;
}

export interface SearchOptions {
  page?: number;
  per_page?: number;
  query?: string;
  sort?: string;
}
