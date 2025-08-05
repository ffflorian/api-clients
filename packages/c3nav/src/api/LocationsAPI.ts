import {Endpoint} from '../Endpoints';
import type {Location, LocationDetails, LocationGeometry, LocationType} from '../interfaces/';
/**
 * Locations are Levels, Spaces, Areas, POIs and Location Groups (see `/locations/types/`). They have a shared ID pool.
 *
 * This API endpoint only accesses locations that have `can_search` or `can_describe` set to `true`.
 *
 * If you want to access all of them, use the API endpoints for the Location Types.
 *
 * Additionally, you can access Custom Locations (Coordinates) by using `c:<level.short_label>:x:y` as an id or slug.
 */

export class LocationsAPI {
  constructor(private readonly baseURL: string) {}

  public async getDetails(id: number): Promise<LocationDetails>;
  public async getDetails(slug: string): Promise<LocationDetails>;
  public async getDetails(id: string | number): Promise<LocationDetails> {
    const endpoint = Endpoint.Location.details(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getGeometry(id: number): Promise<LocationGeometry>;
  public async getGeometry(slug: string): Promise<LocationGeometry>;
  public async getGeometry(id: string | number): Promise<LocationGeometry> {
    const endpoint = Endpoint.Location.geometry(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Location[]> {
    const endpoint = Endpoint.Location.locations();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getLocation(id: number): Promise<Location>;
  public async getLocation(slug: string): Promise<Location>;
  public async getLocation(id: string | number): Promise<Location> {
    const endpoint = Endpoint.Location.detail(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getTypes(): Promise<LocationType[]> {
    const endpoint = Endpoint.Location.types();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }
}
