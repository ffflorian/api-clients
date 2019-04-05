export namespace Endpoint {
  const ACCESSRESTRICTIONGROUPS = 'accessrestrictiongroups';
  const ACCESSRESTRICTIONS = 'accessrestrictions';
  const AREAS = 'areas';
  const BOUNDS = 'bounds';
  const BUILDINGS = 'buildings';
  const CHANGESETS = 'changesets';
  const COLUMNS = 'columns';
  const CROSSDESCRIPTIONS = 'crossdescriptions';
  const DETAILS = 'details';
  const DOORS = 'doors';
  const EDITOR = 'editor';
  const GEOMETRY = 'geometry';
  const HOLES = 'holes';
  const LEAVEDESCRIPTIONS = 'leavedescriptions';
  const LEVELS = 'levels';
  const LINEOBSTACLES = 'lineobstacles';
  const LOCATIONGROUPCATEGORIES = 'locationgroupcategories';
  const LOCATIONGROUPS = 'locationgroups';
  const LOCATIONS = 'locations';
  const MAP = 'map';
  const OBSTACLES = 'obstacles';
  const POIS = 'pois';
  const RAMPS = 'ramps';
  const ROUTING = 'routing';
  const SESSION = 'session';
  const SOURCES = 'sources';
  const SPACES = 'spaces';
  const STAIRS = 'stairs';
  const TYPES = 'types';
  const UPDATES = 'updates';

  const encode: typeof encodeURIComponent = encodeURIComponent;

  export namespace Map {
    export function bounds(): string {
      return `/${MAP}/${BOUNDS}/`;
    }
  }

  export namespace Level {
    export function levels(id?: number | string): string {
      let endpoint = `/${LEVELS}/`;
      if (id) {
        endpoint += `${encode(String(id))}/`;
      }
      return endpoint;
    }
  }

  export namespace Location {
    export function locations(): string {
      return `/${LOCATIONS}/`;
    }

    export function detail(id: number | string): string {
      let endpoint = `/${LOCATIONS}/`;
      endpoint += typeof id === 'string' ? 'by_slug/' : '';
      endpoint += `${encode(String(id))}/`;
      return endpoint;
    }

    export function details(id: number | string): string {
      let endpoint = `/${LOCATIONS}/`;
      endpoint += typeof id === 'string' ? 'by_slug/' : '';
      endpoint += `${encode(String(id))}/${DETAILS}/`;
      return endpoint;
    }

    export function geometry(id: number | string): string {
      let endpoint = `/${LOCATIONS}/`;
      endpoint += typeof id === 'string' ? 'by_slug/' : '';
      endpoint += `${encode(String(id))}/${GEOMETRY}/`;
      return endpoint;
    }

    export function types(): string {
      return `/${LOCATIONS}/${TYPES}/`;
    }
  }

  export function accessRestrictionGroups(id?: number | string): string {
    let endpoint = `/${ACCESSRESTRICTIONGROUPS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function accessRestrictions(id?: number | string): string {
    let endpoint = `/${ACCESSRESTRICTIONS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function areas(id?: number | string): string {
    let endpoint = `/${AREAS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function buildings(id?: number | string): string {
    let endpoint = `/${BUILDINGS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function changesets(id?: number | string): string {
    let endpoint = `/${CHANGESETS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function columns(id?: number | string): string {
    let endpoint = `/${COLUMNS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function crossDescriptions(id?: number | string): string {
    let endpoint = `/${CROSSDESCRIPTIONS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function doors(id?: number | string): string {
    let endpoint = `/${DOORS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function editor(id?: number | string): string {
    let endpoint = `/${EDITOR}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function holes(id?: number | string): string {
    let endpoint = `/${HOLES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function leaveDescriptions(id?: number | string): string {
    let endpoint = `/${LEAVEDESCRIPTIONS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function lineObstacles(id?: number | string): string {
    let endpoint = `/${LINEOBSTACLES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function locationGroupCategories(id?: number | string): string {
    let endpoint = `/${LOCATIONGROUPCATEGORIES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function locationGroups(id?: number | string): string {
    let endpoint = `/${LOCATIONGROUPS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function obstacles(id?: number | string): string {
    let endpoint = `/${OBSTACLES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function pois(id?: number | string): string {
    let endpoint = `/${POIS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function ramps(id?: number | string): string {
    let endpoint = `/${RAMPS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function routing(id?: number | string): string {
    let endpoint = `/${ROUTING}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function session(id?: number | string): string {
    let endpoint = `/${SESSION}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function sources(id?: number | string): string {
    let endpoint = `/${SOURCES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function spaces(id?: number | string): string {
    let endpoint = `/${SPACES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function stairs(id?: number | string): string {
    let endpoint = `/${STAIRS}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }

  export function updates(id?: number | string): string {
    let endpoint = `/${UPDATES}/`;
    if (id) {
      endpoint += `${encode(String(id))}/`;
    }
    return endpoint;
  }
}
