import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, LibrariesIOResult, PaginationOptions, Platform} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class PlatformAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Get list of supported package managers.
   * @see https://libraries.io/api#platforms
   * @param options Pagination options
   */
  public async getPlatforms(options?: PaginationOptions): Promise<LibrariesIOResult<Platform[]>> {
    const endpoint = Endpoint.platforms();
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }
}
