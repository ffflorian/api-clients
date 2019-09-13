export interface SearchOptions extends SuggestionsOptions {
  /**
   * The offset in which to start searching from (max of 5000)
   *
   * Default value: `0`
   */
  from?: string;
}

export interface SuggestionsOptions {
  /**
   * The total number of results to return (max of 250)
   *
   * Default value: `25`
   */
  size?: string;
}
