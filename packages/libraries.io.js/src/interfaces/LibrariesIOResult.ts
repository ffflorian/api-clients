export interface LibrariesIOHeaders {
  rateLimit: number;
  rateLimitRemaining: number;
}

export interface LibrariesIOResult<T> extends LibrariesIOHeaders {
  data: T;
  totalResults?: number;
}
