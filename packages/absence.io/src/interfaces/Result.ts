export interface Paginated<T> {
  count: number;
  data: T;
  limit: number;
  skip: number;
  totalCount: number;
}
