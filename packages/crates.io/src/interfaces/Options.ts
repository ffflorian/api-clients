export interface ClientOptions {
  apiKey?: string;
  apiUrl?: string;
}

export interface PaginationOptions {
  page?: number;
  per_page?: number;
}

export interface SearchOptions {
  category?: string;
  following?: string;
  keyword?: string;
  letter?: string;
  page?: number;
  per_page?: number;
  sort?: string;
  team_id?: number;
  user_id?: number;
}
