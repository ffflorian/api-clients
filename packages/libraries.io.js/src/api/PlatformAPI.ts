import {Endpoint} from '../Endpoints';
import {LibrariesIOResult, PaginationOptions, Platform} from '../interfaces/';
import {RequestService} from '../RequestService';

export class PlatformAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /**
   * Get list of supported package managers.
   * @see https://libraries.io/api#platforms
   * @param options Pagination options
   */
  public getPlatforms(options?: PaginationOptions): Promise<LibrariesIOResult<Platform[]>> {
    const endpoint = Endpoint.platforms();
    return this.requestService.get(endpoint, options);
  }
}
