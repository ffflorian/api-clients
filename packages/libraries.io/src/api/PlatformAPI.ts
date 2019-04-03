import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../Endpoints';
import {PaginationOptions, Platform, RequestOptions} from '../interfaces/';

export class PlatformAPI {
  private readonly apiClient: APIClient<RequestOptions>;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
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
