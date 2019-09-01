export interface LibrariesIOHeaders {
  rateLimit: number;
  rateLimitRemaining: number;
  totalResults?: number;
}

export interface LibrariesIOResult<T> extends LibrariesIOHeaders {
  data: T;
}
