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

  constructor(apiUrl: string);
  constructor(options: ClientOptions);
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiUrl: options};
    }

    this.baseURL = 'https://c3nav.de/api/';

    this.api = {
      accessRestrictionGroups: new AccessRestrictionGroupsAPI(this.baseURL, options),
      accessRestrictions: new AccessRestrictionsAPI(this.baseURL, options),
      areas: new AreasAPI(this.baseURL, options),
      buildings: new BuildingsAPI(this.baseURL, options),
      changesets: new ChangesetsAPI(this.baseURL, options),
      columns: new ColumnsAPI(this.baseURL, options),
      crossDescriptions: new CrossDescriptionsAPI(this.baseURL, options),
      doors: new DoorsAPI(this.baseURL, options),
      editor: new EditorAPI(this.baseURL, options),
      holes: new HolesAPI(this.baseURL, options),
      leaveDescriptions: new LeaveDescriptionsAPI(this.baseURL, options),
      levels: new LevelListAPI(this.baseURL, options),
      lineObstacles: new LineObstaclesAPI(this.baseURL, options),
      locationGroupCategories: new LocationGroupCategoriesAPI(this.baseURL, options),
      locationGroups: new LocationGroupsAPI(this.baseURL, options),
      locations: new LocationsAPI(this.baseURL, options),
      map: new MapAPI(this.baseURL, options),
      obstacles: new ObstaclesAPI(this.baseURL, options),
      pois: new PoisAPI(this.baseURL, options),
      ramps: new RampsAPI(this.baseURL, options),
      routing: new RoutingAPI(this.baseURL, options),
      session: new SessionAPI(this.baseURL, options),
      sources: new SourcesAPI(this.baseURL, options),
      spaces: new SpacesAPI(this.baseURL, options),
      stairs: new StairsAPI(this.baseURL, options),
      updates: new UpdatesAPI(this.baseURL, options),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API URL
   */
  public setApiUrl(newUrl: string): void {
    this.baseURL = newUrl;
  }
}
