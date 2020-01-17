export interface RequestOptions {
  withImage?: boolean;
}

export interface ClientOptions {
  apiUrl?: string;
}

export interface ICanHazDadJokeResult {
  id: string;
  joke: string;
  status: number;
}

export interface JokeSearchResult {
  current_page: number;
  limit: number;
  next_page: number;
  previous_page: number;
  results: ICanHazDadJokeResult[];
  search_tearm: string;
  status: number;
  total_jokes: number;
  total_pages: number;
}

export interface JokeResultWithImage extends ICanHazDadJokeResult {
  image: Buffer;
}

export interface SearchOptions {
  /** number of results to return per page (default: 20) (max: 30) */
  limit?: number;
  /** which page of results to fetch (default: 1) */
  page?: number;
  /** search term to use (default: list all jokes) */
  term?: string;
}
