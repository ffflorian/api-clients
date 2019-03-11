import {Endpoint} from '../Endpoints';
import {Location, LocationDetails, LocationGeometry, LocationType} from '../interfaces/';
import {RequestService} from '../RequestService';

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
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Location[]> {
    const endpoint = Endpoint.Location.locations();
    return this.requestService.get(endpoint);
  }

  public getLocation(id: number): Promise<Location>;
  public getLocation(slug: string): Promise<Location>;
  public getLocation(id: string | number): Promise<Location> {
    const endpoint = Endpoint.Location.detail(id);
    return this.requestService.get(endpoint);
  }

  public getDetails(id: number): Promise<LocationDetails>;
  public getDetails(slug: string): Promise<LocationDetails>;
  public getDetails(id: string | number): Promise<LocationDetails> {
    const endpoint = Endpoint.Location.details(id);
    return this.requestService.get(endpoint);
  }

  public getTypes(): Promise<LocationType[]> {
    const endpoint = Endpoint.Location.types();
    return this.requestService.get(endpoint);
  }

  public getGeometry(id: number): Promise<LocationGeometry>;
  public getGeometry(slug: string): Promise<LocationGeometry>;
  public getGeometry(id: string | number): Promise<LocationGeometry> {
    const endpoint = Endpoint.Location.geometry(id);
    return this.requestService.get(endpoint);
  }
}
