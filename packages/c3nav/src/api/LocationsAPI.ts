import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, Location, LocationDetails, LocationGeometry, LocationType} from '../interfaces/';
import {APIBase} from './APIBase';

/**
 * Locations are Levels, Spaces, Areas, POIs and Location Groups (see `/locations/types/`). They have a shared ID pool.
 *
 * This API endpoint only accesses locations that have `can_search` or `can_describe` set to `true`.
 *
 * If you want to access all of them, use the API endpoints for the Location Types.
 *
 * Additionally, you can access Custom Locations (Coordinates) by using `c:<level.short_label>:x:y` as an id or slug.
 */
export class LocationsAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  public async getDetails(id: number): Promise<LocationDetails>;
  public async getDetails(slug: string): Promise<LocationDetails>;
  public async getDetails(id: string | number): Promise<LocationDetails> {
    const endpoint = Endpoint.Location.details(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getGeometry(id: number): Promise<LocationGeometry>;
  public async getGeometry(slug: string): Promise<LocationGeometry>;
  public async getGeometry(id: string | number): Promise<LocationGeometry> {
    const endpoint = Endpoint.Location.geometry(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Location[]> {
    const endpoint = Endpoint.Location.locations();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getLocation(id: number): Promise<Location>;
  public async getLocation(slug: string): Promise<Location>;
  public async getLocation(id: string | number): Promise<Location> {
    const endpoint = Endpoint.Location.detail(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getTypes(): Promise<LocationType[]> {
    const endpoint = Endpoint.Location.types();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
