import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Location, Paginated, PaginationOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class LocationAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single location
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#11905bb3-ce8d-80b4-656b-4b9097e35825
   */
  public async retrieveLocation(id: string): Promise<Location> {
    this.checkApiKey('Location');
    const endpoint = Endpoint.Location.locations(id);
    const {data: location} = await this.apiClient.get<Location>(endpoint);
    return location;
  }

  /**
   * Retrieve locations
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#641bf728-23a1-538d-511f-5d1f69f15ba9
   */
  public async retrieveLocations(options?: PaginationOptions): Promise<Paginated<Location>> {
    this.checkApiKey('Location');
    const endpoint = Endpoint.Location.locations();
    const {data: locations} = await this.apiClient.post<Paginated<Location>>(endpoint, {data: options});
    return locations;
  }
}
