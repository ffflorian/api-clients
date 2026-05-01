import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Location, Paginated, PaginationOptions} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class LocationAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Deletes a location
   * @param id The location id
   */
  public async deleteLocation(id: string): Promise<void> {
    this.checkApiKey('Location');
    const endpoint = Endpoint.Location.locations(id);
    await this.apiClient.delete(endpoint);
  }

  /**
   * Retrieve a single location
   */
  public async retrieveLocation(id: string): Promise<Location> {
    this.checkApiKey('Location');
    const endpoint = Endpoint.Location.locations(id);
    const {data: location} = await this.apiClient.get<Location>(endpoint);
    return location;
  }

  /**
   * Retrieve locations
   */
  public async retrieveLocations(options?: PaginationOptions): Promise<Paginated<Location[]>> {
    this.checkApiKey('Location');
    const endpoint = Endpoint.Location.locations();
    const {data: locations} = await this.apiClient.post<Paginated<Location[]>>(endpoint, options);
    return locations;
  }
}
