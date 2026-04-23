const encode: typeof encodeURIComponent = encodeURIComponent;

function mapDataEndpoint(path: string, id?: number | string): string {
  let endpoint = `/api/v2/mapdata/${path}/`;
  if (id !== undefined) {
    endpoint += `${encode(String(id))}/`;
  }
  return endpoint;
}

export const Endpoint = {
  ACCESSRESTRICTIONGROUPS: 'accessrestrictiongroups',
  accessRestrictionGroups(id?: number | string): string {
    return mapDataEndpoint('accessrestrictiongroups', id);
  },
  ACCESSRESTRICTIONS: 'accessrestrictions',
  accessRestrictions(id?: number | string): string {
    return mapDataEndpoint('accessrestrictions', id);
  },
  AREAS: 'areas',
  areas(id?: number | string): string {
    return mapDataEndpoint('areas', id);
  },
  BOUNDS: 'bounds',
  BUILDINGS: 'buildings',
  buildings(id?: number | string): string {
    return mapDataEndpoint('buildings', id);
  },
  CHANGESETS: 'changesets',
  changesets(id?: number | string): string {
    return mapDataEndpoint('changesets', id);
  },
  COLUMNS: 'columns',
  columns(id?: number | string): string {
    return mapDataEndpoint('columns', id);
  },
  CROSSDESCRIPTIONS: 'cross_descriptions',
  crossDescriptions(id?: number | string): string {
    return mapDataEndpoint('cross_descriptions', id);
  },
  DETAILS: 'display',
  DOORS: 'doors',
  doors(id?: number | string): string {
    return mapDataEndpoint('doors', id);
  },
  EDITOR: 'editor',
  editor(id?: number | string): string {
    let endpoint = '/api/v2/editor/';
    if (id !== undefined) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },
  Editor: {
    beaconsLookup(): string {
      return '/api/v2/editor/beacons-lookup/';
    },

    bounds(): string {
      return '/api/v2/editor/bounds/';
    },

    geometryStyles(): string {
      return '/api/v2/editor/geometrystyles/';
    },

    levelGeometries(levelId: number | string): string {
      return `/api/v2/editor/geometries/level/${encode(String(levelId))}/`;
    },

    spaceGeometries(spaceId: number | string): string {
      return `/api/v2/editor/geometries/space/${encode(String(spaceId))}/`;
    },
  },
  GEOMETRY: 'geometry',
  HOLES: 'holes',
  holes(id?: number | string): string {
    return mapDataEndpoint('holes', id);
  },
  LEAVEDESCRIPTIONS: 'leave_descriptions',
  leaveDescriptions(id?: number | string): string {
    return mapDataEndpoint('leave_descriptions', id);
  },
  Level: {
    levels(id?: number | string): string {
      return mapDataEndpoint('levels', id);
    },
  },
  LEVELS: 'levels',
  LINEOBSTACLES: 'lineobstacles',
  lineObstacles(id?: number | string): string {
    return mapDataEndpoint('lineobstacles', id);
  },

  Location: {
    detail(id: number | string): string {
      if (typeof id === 'string') {
        return `/api/v2/map/locations/by-slug/${encode(String(id))}/`;
      }
      return `/api/v2/map/locations/${encode(String(id))}/`;
    },

    details(id: number | string): string {
      if (typeof id === 'string') {
        return `/api/v2/map/locations/by-slug/${encode(String(id))}/display/`;
      }
      return `/api/v2/map/locations/${encode(String(id))}/display/`;
    },

    geometry(id: number | string): string {
      if (typeof id === 'string') {
        return `/api/v2/map/locations/by-slug/${encode(String(id))}/geometry/`;
      }
      return `/api/v2/map/locations/${encode(String(id))}/geometry/`;
    },

    locations(): string {
      return '/api/v2/map/locations/';
    },

    types(): string {
      return '/api/v2/locations/types/';
    },
  },

  LOCATIONGROUPCATEGORIES: 'locationgroupcategories',

  locationGroupCategories(id?: number | string): string {
    return mapDataEndpoint('locationgroupcategories', id);
  },

  LOCATIONGROUPS: 'locationgroups',

  locationGroups(id?: number | string): string {
    return mapDataEndpoint('locationgroups', id);
  },

  LOCATIONS: 'locations',

  MAP: 'map',

  Map: {
    bounds(): string {
      return '/api/v2/map/bounds/';
    },

    legend(themeId: number | string): string {
      return `/api/v2/map/legend/${encode(String(themeId))}/`;
    },

    load(): string {
      return '/api/v2/map/load/';
    },

    locationById(locationId: number | string, full = false): string {
      return full
        ? `/api/v2/map/locations/${encode(String(locationId))}/full/`
        : `/api/v2/map/locations/${encode(String(locationId))}/`;
    },

    locationBySlug(locationSlug: string, full = false): string {
      return full
        ? `/api/v2/map/locations/by-slug/${encode(String(locationSlug))}/full/`
        : `/api/v2/map/locations/by-slug/${encode(String(locationSlug))}/`;
    },

    locationDisplayById(locationId: number | string): string {
      return `/api/v2/map/locations/${encode(String(locationId))}/display/`;
    },

    locationDisplayBySlug(locationSlug: string): string {
      return `/api/v2/map/locations/by-slug/${encode(String(locationSlug))}/display/`;
    },

    locationGeometryById(locationId: number | string): string {
      return `/api/v2/map/locations/${encode(String(locationId))}/geometry/`;
    },

    locationGeometryBySlug(locationSlug: string): string {
      return `/api/v2/map/locations/by-slug/${encode(String(locationSlug))}/geometry/`;
    },

    locations(full = false): string {
      return full ? '/api/v2/map/locations/full/' : '/api/v2/map/locations/';
    },

    myPositions(): string {
      return '/api/v2/map/positions/my/';
    },

    position(positionId: number | string): string {
      return `/api/v2/map/positions/${encode(String(positionId))}/`;
    },

    projection(): string {
      return '/api/v2/map/projection/';
    },

    quests(): string {
      return '/api/v2/map/quests/';
    },

    settings(): string {
      return '/api/v2/map/settings/';
    },

    wifidata(): string {
      return '/api/v2/map/wifidata/';
    },
  },

  Mesh: {
    firmwareById(firmwareId: number): string {
      return `/api/v2/mesh/firmwares/${encode(String(firmwareId))}/`;
    },

    firmwares(): string {
      return '/api/v2/mesh/firmwares/';
    },

    map(levelId: number): string {
      return `/api/v2/mesh/map/${encode(String(levelId))}/`;
    },

    messages(): string {
      return '/api/v2/mesh/messages/';
    },
  },

  OBSTACLES: 'obstacles',

  obstacles(id?: number | string): string {
    return mapDataEndpoint('obstacles', id);
  },

  POIS: 'pois',

  pois(id?: number | string): string {
    return mapDataEndpoint('pois', id);
  },

  Positioning: {
    locate(): string {
      return '/api/v2/positioning/locate/';
    },

    locateTest(): string {
      return '/api/v2/positioning/locate-test/';
    },
  },

  RAMPS: 'ramps',

  ramps(id?: number | string): string {
    return mapDataEndpoint('ramps', id);
  },

  ROUTING: 'routing',

  routing(id?: number | string): string {
    let endpoint = '/api/v2/routing/';
    if (id !== undefined) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  Routing: {
    options(): string {
      return '/api/v2/routing/options/';
    },

    optionsForm(): string {
      return '/api/v2/routing/options/form/';
    },

    route(): string {
      return '/api/v2/routing/route/';
    },
  },

  SESSION: 'session',

  session(id?: number | string): string {
    let endpoint = '/api/v2/auth/session/';
    if (id !== undefined) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  Session: {
    key(): string {
      return '/api/v2/auth/session/';
    },

    status(): string {
      return '/api/v2/auth/status/';
    },
  },

  SOURCES: 'sources',

  sources(id?: number | string): string {
    return mapDataEndpoint('sources', id);
  },

  SPACES: 'spaces',

  spaces(id?: number | string): string {
    return mapDataEndpoint('spaces', id);
  },

  STAIRS: 'stairs',

  stairs(id?: number | string): string {
    return mapDataEndpoint('stairs', id);
  },

  TYPES: 'types',

  UPDATES: 'updates',

  updates(id?: number | string): string {
    let endpoint = '/api/v2/updates/';
    if (id !== undefined) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  },

  Updates: {
    fetch(): string {
      return '/api/v2/updates/fetch/';
    },
  },
};
