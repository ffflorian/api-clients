const encode: typeof encodeURIComponent = encodeURIComponent;

export const Endpoint = {
  ACCESSRESTRICTIONGROUPS: 'accessrestrictiongroups',
  accessRestrictionGroups(id?: number | string): string {
    let endpoint = `/${Endpoint.ACCESSRESTRICTIONGROUPS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  ACCESSRESTRICTIONS: 'accessrestrictions',
  accessRestrictions(id?: number | string): string {
    let endpoint = `/${Endpoint.ACCESSRESTRICTIONS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  AREAS: 'areas',
  areas(id?: number | string): string {
    let endpoint = `/${Endpoint.AREAS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  BOUNDS: 'bounds',
  BUILDINGS: 'buildings',
  buildings(id?: number | string): string {
    let endpoint = `/${Endpoint.BUILDINGS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  CHANGESETS: 'changesets',
  changesets(id?: number | string): string {
    let endpoint = `/${Endpoint.CHANGESETS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  COLUMNS: 'columns',
  columns(id?: number | string): string {
    let endpoint = `/${Endpoint.COLUMNS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  CROSSDESCRIPTIONS: 'crossdescriptions',
  crossDescriptions(id?: number | string): string {
    let endpoint = `/${Endpoint.CROSSDESCRIPTIONS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  DETAILS: 'details',
  DOORS: 'doors',
  doors(id?: number | string): string {
    let endpoint = `/${Endpoint.DOORS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  EDITOR: 'editor',
  editor(id?: number | string): string {
    let endpoint = `/${Endpoint.EDITOR}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  GEOMETRY: 'geometry',
  HOLES: 'holes',
  holes(id?: number | string): string {
    let endpoint = `/${Endpoint.HOLES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  LEAVEDESCRIPTIONS: 'leavedescriptions',
  leaveDescriptions(id?: number | string): string {
    let endpoint = `/${Endpoint.LEAVEDESCRIPTIONS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
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
  LEVELS: 'levels',
  LINEOBSTACLES: 'lineobstacles',
  lineObstacles(id?: number | string): string {
    let endpoint = `/${Endpoint.LINEOBSTACLES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  Location: {
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

    locations(): string {
      return `/${Endpoint.LOCATIONS}/`;
    },

    types(): string {
      return `/${Endpoint.LOCATIONS}/${Endpoint.TYPES}/`;
    },
  },

  LOCATIONGROUPCATEGORIES: 'locationgroupcategories',

  locationGroupCategories(id?: number | string): string {
    let endpoint = `/${Endpoint.LOCATIONGROUPCATEGORIES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  LOCATIONGROUPS: 'locationgroups',

  locationGroups(id?: number | string): string {
    let endpoint = `/${Endpoint.LOCATIONGROUPS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  LOCATIONS: 'locations',

  MAP: 'map',

  Map: {
    bounds(): string {
      return `/${Endpoint.MAP}/${Endpoint.BOUNDS}/`;
    },
  },

  OBSTACLES: 'obstacles',

  obstacles(id?: number | string): string {
    let endpoint = `/${Endpoint.OBSTACLES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  POIS: 'pois',

  pois(id?: number | string): string {
    let endpoint = `/${Endpoint.POIS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  RAMPS: 'ramps',

  ramps(id?: number | string): string {
    let endpoint = `/${Endpoint.RAMPS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  ROUTING: 'routing',

  routing(id?: number | string): string {
    let endpoint = `/${Endpoint.ROUTING}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  SESSION: 'session',

  session(id?: number | string): string {
    let endpoint = `/${Endpoint.SESSION}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  SOURCES: 'sources',

  sources(id?: number | string): string {
    let endpoint = `/${Endpoint.SOURCES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  SPACES: 'spaces',

  spaces(id?: number | string): string {
    let endpoint = `/${Endpoint.SPACES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  STAIRS: 'stairs',

  stairs(id?: number | string): string {
    let endpoint = `/${Endpoint.STAIRS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  TYPES: 'types',

  UPDATES: 'updates',

  updates(id?: number | string): string {
    let endpoint = `/${Endpoint.UPDATES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
};
