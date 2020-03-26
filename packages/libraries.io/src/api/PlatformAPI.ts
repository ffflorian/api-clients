import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, LibrariesIOResult, PaginationOptions, Platform} from '../interfaces/';
import {APIBase} from './APIBase';

export class PlatformAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
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
