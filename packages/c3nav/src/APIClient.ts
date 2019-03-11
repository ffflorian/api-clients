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
} from './api/';
import {API, ClientOptions} from './interfaces/';
import {RequestService} from './RequestService';

export class LibrariesIO {
  private readonly requestService: RequestService;
  public readonly api: API;

  constructor(apiUrl: string);
  constructor(options: ClientOptions);
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      options = {apiUrl: options};
    }

    this.requestService = new RequestService(options);

    this.api = {
      accessRestrictionGroups: new AccessRestrictionGroupsAPI(this.requestService),
      accessRestrictions: new AccessRestrictionsAPI(this.requestService),
      areas: new AreasAPI(this.requestService),
      buildings: new BuildingsAPI(this.requestService),
      changesets: new ChangesetsAPI(this.requestService),
      columns: new ColumnsAPI(this.requestService),
      crossDescriptions: new CrossDescriptionsAPI(this.requestService),
      doors: new DoorsAPI(this.requestService),
      editor: new EditorAPI(this.requestService),
      holes: new HolesAPI(this.requestService),
      leaveDescriptions: new LeaveDescriptionsAPI(this.requestService),
      levels: new LevelListAPI(this.requestService),
      lineObstacles: new LineObstaclesAPI(this.requestService),
      locationGroupCategories: new LocationGroupCategoriesAPI(this.requestService),
      locationGroups: new LocationGroupsAPI(this.requestService),
      locations: new LocationsAPI(this.requestService),
      map: new MapAPI(this.requestService),
      obstacles: new ObstaclesAPI(this.requestService),
      pois: new PoisAPI(this.requestService),
      ramps: new RampsAPI(this.requestService),
      routing: new RoutingAPI(this.requestService),
      session: new SessionAPI(this.requestService),
      sources: new SourcesAPI(this.requestService),
      spaces: new SpacesAPI(this.requestService),
      stairs: new StairsAPI(this.requestService),
      updates: new UpdatesAPI(this.requestService),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.requestService.setApiUrl(newUrl);
  }
}
