import axios, {AxiosInstance} from 'axios';

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
  private readonly apiClient: AxiosInstance;

  constructor(apiUrl: string);
  constructor(options: ClientOptions);
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiUrl: options};
    }

    this.apiClient = axios.create({
      baseURL: 'https://c3nav.de/api/',
    });

    this.api = {
      accessRestrictionGroups: new AccessRestrictionGroupsAPI(this.apiClient, options),
      accessRestrictions: new AccessRestrictionsAPI(this.apiClient, options),
      areas: new AreasAPI(this.apiClient, options),
      buildings: new BuildingsAPI(this.apiClient, options),
      changesets: new ChangesetsAPI(this.apiClient, options),
      columns: new ColumnsAPI(this.apiClient, options),
      crossDescriptions: new CrossDescriptionsAPI(this.apiClient, options),
      doors: new DoorsAPI(this.apiClient, options),
      editor: new EditorAPI(this.apiClient, options),
      holes: new HolesAPI(this.apiClient, options),
      leaveDescriptions: new LeaveDescriptionsAPI(this.apiClient, options),
      levels: new LevelListAPI(this.apiClient, options),
      lineObstacles: new LineObstaclesAPI(this.apiClient, options),
      locationGroupCategories: new LocationGroupCategoriesAPI(this.apiClient, options),
      locationGroups: new LocationGroupsAPI(this.apiClient, options),
      locations: new LocationsAPI(this.apiClient, options),
      map: new MapAPI(this.apiClient, options),
      obstacles: new ObstaclesAPI(this.apiClient, options),
      pois: new PoisAPI(this.apiClient, options),
      ramps: new RampsAPI(this.apiClient, options),
      routing: new RoutingAPI(this.apiClient, options),
      session: new SessionAPI(this.apiClient, options),
      sources: new SourcesAPI(this.apiClient, options),
      spaces: new SpacesAPI(this.apiClient, options),
      stairs: new StairsAPI(this.apiClient, options),
      updates: new UpdatesAPI(this.apiClient, options),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API URL
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }
}
