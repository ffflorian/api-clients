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
} from '../api/';

export interface API {
  accessRestrictionGroups: AccessRestrictionGroupsAPI;
  accessRestrictions: AccessRestrictionsAPI;
  areas: AreasAPI;
  buildings: BuildingsAPI;
  changesets: ChangesetsAPI;
  columns: ColumnsAPI;
  crossDescriptions: CrossDescriptionsAPI;
  doors: DoorsAPI;
  editor: EditorAPI;
  holes: HolesAPI;
  leaveDescriptions: LeaveDescriptionsAPI;
  levels: LevelListAPI;
  lineObstacles: LineObstaclesAPI;
  locationGroupCategories: LocationGroupCategoriesAPI;
  locationGroups: LocationGroupsAPI;
  locations: LocationsAPI;
  map: MapAPI;
  obstacles: ObstaclesAPI;
  pois: PoisAPI;
  ramps: RampsAPI;
  routing: RoutingAPI;
  session: SessionAPI;
  sources: SourcesAPI;
  spaces: SpacesAPI;
  stairs: StairsAPI;
  updates: UpdatesAPI;
}
