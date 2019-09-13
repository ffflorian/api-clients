import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {SearchOptions, SearchResult, SuggestionsOptions} from '../interfaces';

export class SearchAPI {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * Fetch suggestions.
   * @param query Perform a search query
   * @see https://api-docs.npms.io/#api-Search-SearchSuggestions
   */
  public async getSuggestions(query: string, options: SuggestionsOptions = {}): Promise<SearchResult> {
    const endpoint = Endpoint.Search.search();

    const params = {
      q: encodeURIComponent(query),
      size: options.size,
    };

    const {data} = await this.apiClient.get(endpoint, {params});
    return data;
  }

  /**
   * Perform a search query.
   * @param query Besides normal text, `query` supports qualifiers to express filters and other modifiers:
   * - `scope:types:` Show/filter results that belong to the `@types` scope
   * - `author:sindresorhus:` Show/filter results in which `sindresorhus` is the author
   * - `maintainer:sindresorhus:` Show/filter results in which `sindresorhus` is qualifier as a maintainer
   * - `keywords:gulpplugin:` Show/filter results that have `gulpplugin` in the keywords (separate multiple keywords with commas, you may also exclude keywords e.g.: `-framework`)
   * - `not:deprecated:` Exclude deprecated packages from the results
   * - `not:unstable:` Exclude packages whose version is `< 1.0.0`
   * - `not:insecure:` Exclude packages that are insecure or have vulnerable dependencies (as per [nsp](https://nodesecurity.io/))
   * - `is:deprecated:` Show/filter is deprecated packages
   * - `is:unstable:` Show/filter packages whose version is `< 1.0.0`
   * - `is:insecure:` Show/filter packages that are insecure or have vulnerable dependencies (as per [nsp](https://nodesecurity.io/))
   * - `boost-exact:false`: Do not boost exact matches, defaults to `true`
   * - `score-effect:14`: Set the effect that package scores have for the final search score, defaults to `15.3`
   * - `quality-weight:1`: Set the weight that quality has for the each package score, defaults to `1.95`
   * - `popularity-weight:1`: Set the weight that popularity has for the each package score, defaults to `3.3`
   * - `maintenance-weight:1`: Set the weight that the quality has for the each package score, defaults to `2.05`
   * @param options Additional search options
   * @see https://api-docs.npms.io/#api-Search-ExecuteSearchQuery
   */
  public async searchPackage(query: string, options: SearchOptions = {}): Promise<SearchResult> {
    const endpoint = Endpoint.Search.search();

    const params = {
      from: options.from,
      q: encodeURIComponent(query),
      size: options.size,
    };

    const {data} = await this.apiClient.get(endpoint, {params});
    return data;
  }
}
