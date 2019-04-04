import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../Endpoints';
import {ClientOptions, PaginationOptions, Platform} from '../interfaces/';
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
  public getPlatforms(options?: PaginationOptions): Promise<Platform[]> {
    const endpoint = Endpoint.platforms();
    return this.apiClient.requestService.get(endpoint, {data: options});
  }
}
