import {
  AccessRestrictionGroupsAPI,
  AccessRestrictionsAPI,
  AreasAPI,
  BuildingsAPI,
  ChangesetsAPI,
  ColumnsAPI,
  CrossDescriptionsAPI,
  DoorsAPI,
  EditorAPI,
  HolesAPI,
  LeaveDescriptionsAPI,
  LevelListAPI,
  LineObstaclesAPI,
  LocationGroupCategoriesAPI,
  LocationGroupsAPI,
  LocationsAPI,
  MapAPI,
  ObstaclesAPI,
  PoisAPI,
  RampsAPI,
  RoutingAPI,
  SessionAPI,
  SourcesAPI,
  SpacesAPI,
  StairsAPI,
  UpdatesAPI,
} from './api';
import type {API, ClientOptions} from './interfaces';

export class LibrariesIO {
  public readonly api: API;
  private baseURL: string;

  constructor(apiUrl?: string);
  constructor(options?: ClientOptions);
  constructor(options?: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiUrl: options};
    }

    ((this.baseURL = options?.apiUrl || 'https://c3nav.de/api/'),
      (this.api = {
        accessRestrictionGroups: new AccessRestrictionGroupsAPI(this.baseURL),
        accessRestrictions: new AccessRestrictionsAPI(this.baseURL),
        areas: new AreasAPI(this.baseURL),
        buildings: new BuildingsAPI(this.baseURL),
        changesets: new ChangesetsAPI(this.baseURL),
        columns: new ColumnsAPI(this.baseURL),
        crossDescriptions: new CrossDescriptionsAPI(this.baseURL),
        doors: new DoorsAPI(this.baseURL),
        editor: new EditorAPI(this.baseURL),
        holes: new HolesAPI(this.baseURL),
        leaveDescriptions: new LeaveDescriptionsAPI(this.baseURL),
        levels: new LevelListAPI(this.baseURL),
        lineObstacles: new LineObstaclesAPI(this.baseURL),
        locationGroupCategories: new LocationGroupCategoriesAPI(this.baseURL),
        locationGroups: new LocationGroupsAPI(this.baseURL),
        locations: new LocationsAPI(this.baseURL),
        map: new MapAPI(this.baseURL),
        obstacles: new ObstaclesAPI(this.baseURL),
        pois: new PoisAPI(this.baseURL),
        ramps: new RampsAPI(this.baseURL),
        routing: new RoutingAPI(this.baseURL),
        session: new SessionAPI(this.baseURL),
        sources: new SourcesAPI(this.baseURL),
        spaces: new SpacesAPI(this.baseURL),
        stairs: new StairsAPI(this.baseURL),
        updates: new UpdatesAPI(this.baseURL),
      }));
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API URL
   */
  public setApiUrl(newUrl: string): void {
    this.baseURL = newUrl;
  }
}
