import {ClientOptions} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Authorization, Location, Paginated, PaginationOptions, RequestOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class LocationAPI extends APIBase<RequestOptions> {
  constructor(config: ClientOptions<RequestOptions>, auth: Authorization) {
    super(config, auth);
  }

  /**
   * Retrieve a single location
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#11905bb3-ce8d-80b4-656b-4b9097e35825
   */
  public retrieveLocation(id: string): Promise<Location> {
    this.checkApiKey('Location');
    const endpoint = Endpoint.Location.locations(id);
    return this.get(endpoint);
  }

  /**
   * Retrieve locations
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#641bf728-23a1-538d-511f-5d1f69f15ba9
   */
  public retrieveLocations(options?: PaginationOptions): Promise<Paginated<Location>> {
    this.checkApiKey('Location');
    const endpoint = Endpoint.Location.locations();
    return this.post(endpoint, {data: options});
  }
}
