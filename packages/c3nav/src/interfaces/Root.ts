export interface Root {
  accessrestrictiongroups: {
    detail: string;
    list: string;
  };
  accessrestrictions: {
    detail: string;
    list: string;
  };
  areas: {
    detail: string;
    list: string;
  };
  buildings: {
    detail: string;
    list: string;
  };
  changesets: {
    activate: string;
    apply: string;
    changes: string;
    current: string;
    deactivate: string;
    delete: string;
    detail: string;
    'direct-editing': string;
    edit: string;
    list: string;
    'pending-review': string;
    propose: string;
    reject: string;
    'restore-object': string;
    review: string;
    reviewing: string;
    unpropose: string;
    unreject: string;
    user: string;
  };
  columns: {
    detail: string;
    list: string;
  };
  crossdescriptions: {
    detail: string;
    list: string;
  };
  doors: {
    detail: string;
    list: string;
  };
  editor: {
    api: string;
    bounds: string;
    geometries: string;
    geometrystyles: string;
  };
  holes: {
    detail: string;
    list: string;
  };
  leavedescriptions: {
    detail: string;
    list: string;
  };
  levels: {
    detail: string;
    geometrytypes: string;
    list: string;
  };
  lineobstacles: {
    detail: string;
    list: string;
  };
  locationgroupcategories: {
    detail: string;
    list: string;
  };
  locationgroups: {
    detail: string;
    list: string;
  };
  locations: {
    'by-slug-detail': string;
    'by-slug-details': string;
    'by-slug-geometry': string;
    detail: string;
    details: string;
    geometry: string;
    list: string;
    types: string;
  };
  map: {
    bounds: string;
  };
  obstacles: {
    detail: string;
    list: string;
  };
  pois: {
    detail: string;
    list: string;
  };
  ramps: {
    detail: string;
    list: string;
  };
  routing: {
    locate: string;
    options: string;
    route: string;
  };
  session: {
    'get-token': string;
    info: string;
    login: string;
    logout: string;
  };
  sources: {
    detail: string;
    image: string;
    list: string;
  };
  spaces: {
    detail: string;
    geometrytypes: string;
    list: string;
  };
  stairs: {
    detail: string;
    list: string;
  };
  updates: {
    fetch: string;
  };
}
