const encode: typeof encodeURIComponent = encodeURIComponent;

export const Endpoint = {
  ACCESSRESTRICTIONGROUPS: 'accessrestrictiongroups',
  ACCESSRESTRICTIONS: 'accessrestrictions',
  AREAS: 'areas',
  BOUNDS: 'bounds',
  BUILDINGS: 'buildings',
  CHANGESETS: 'changesets',
  COLUMNS: 'columns',
  CROSSDESCRIPTIONS: 'crossdescriptions',
  DETAILS: 'details',
  DOORS: 'doors',
  EDITOR: 'editor',
  GEOMETRY: 'geometry',
  HOLES: 'holes',
  LEAVEDESCRIPTIONS: 'leavedescriptions',
  LEVELS: 'levels',
  LINEOBSTACLES: 'lineobstacles',
  LOCATIONGROUPCATEGORIES: 'locationgroupcategories',
  LOCATIONGROUPS: 'locationgroups',
  LOCATIONS: 'locations',
  MAP: 'map',
  OBSTACLES: 'obstacles',
  POIS: 'pois',
  RAMPS: 'ramps',
  ROUTING: 'routing',
  SESSION: 'session',
  SOURCES: 'sources',
  SPACES: 'spaces',
  STAIRS: 'stairs',
  TYPES: 'types',
  UPDATES: 'updates',

  Map: {
    bounds(): string {
      return `/${Endpoint.MAP}/${Endpoint.BOUNDS}/`;
    },
  },

  Level: {
    levels(id?: number | string): string {
      let endpoint = `/${Endpoint.LEVELS}/`;
      if (id) {
        endpoint += `${encode(String(id))}/`;
      }
      return endpoint;
    },
  },

  Location: {
    locations(): string {
      return `/${Endpoint.LOCATIONS}/`;
    },

    detail(id: number | string): string {
      let endpoint = `/${Endpoint.LOCATIONS}/`;
      endpoint += typeof id === 'string' ? 'by_slug/' : '';
      endpoint += `${encode(String(id))}/`;
      return endpoint;
    },

    details(id: number | string): string {
      let endpoint = `/${Endpoint.LOCATIONS}/`;
      endpoint += typeof id === 'string' ? 'by_slug/' : '';
      endpoint += `${encode(String(id))}/${Endpoint.DETAILS}/`;
      return endpoint;
    },

    geometry(id: number | string): string {
      let endpoint = `/${Endpoint.LOCATIONS}/`;
      endpoint += typeof id === 'string' ? 'by_slug/' : '';
      endpoint += `${encode(String(id))}/${Endpoint.GEOMETRY}/`;
      return endpoint;
    },

    types(): string {
      return `/${Endpoint.LOCATIONS}/${Endpoint.TYPES}/`;
    },
  },

  accessRestrictionGroups(id?: number | string): string {
    let endpoint = `/${Endpoint.ACCESSRESTRICTIONGROUPS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  accessRestrictions(id?: number | string): string {
    let endpoint = `/${Endpoint.ACCESSRESTRICTIONS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  areas(id?: number | string): string {
    let endpoint = `/${Endpoint.AREAS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  buildings(id?: number | string): string {
    let endpoint = `/${Endpoint.BUILDINGS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  changesets(id?: number | string): string {
    let endpoint = `/${Endpoint.CHANGESETS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  columns(id?: number | string): string {
    let endpoint = `/${Endpoint.COLUMNS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  crossDescriptions(id?: number | string): string {
    let endpoint = `/${Endpoint.CROSSDESCRIPTIONS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  doors(id?: number | string): string {
    let endpoint = `/${Endpoint.DOORS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  editor(id?: number | string): string {
    let endpoint = `/${Endpoint.EDITOR}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  holes(id?: number | string): string {
    let endpoint = `/${Endpoint.HOLES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  leaveDescriptions(id?: number | string): string {
    let endpoint = `/${Endpoint.LEAVEDESCRIPTIONS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  lineObstacles(id?: number | string): string {
    let endpoint = `/${Endpoint.LINEOBSTACLES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  locationGroupCategories(id?: number | string): string {
    let endpoint = `/${Endpoint.LOCATIONGROUPCATEGORIES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  locationGroups(id?: number | string): string {
    let endpoint = `/${Endpoint.LOCATIONGROUPS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  obstacles(id?: number | string): string {
    let endpoint = `/${Endpoint.OBSTACLES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  pois(id?: number | string): string {
    let endpoint = `/${Endpoint.POIS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  ramps(id?: number | string): string {
    let endpoint = `/${Endpoint.RAMPS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  routing(id?: number | string): string {
    let endpoint = `/${Endpoint.ROUTING}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  session(id?: number | string): string {
    let endpoint = `/${Endpoint.SESSION}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  sources(id?: number | string): string {
    let endpoint = `/${Endpoint.SOURCES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  spaces(id?: number | string): string {
    let endpoint = `/${Endpoint.SPACES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  stairs(id?: number | string): string {
    let endpoint = `/${Endpoint.STAIRS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  updates(id?: number | string): string {
    let endpoint = `/${Endpoint.UPDATES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
};
