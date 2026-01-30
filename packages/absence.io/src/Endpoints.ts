export const Endpoint = {
  Absence: {
    absences(id?: string): string {
      return `/${Endpoint.ABSENCES}/${id ? `${id}/` : ''}`;
    },

    create(): string {
      return `/${Endpoint.ABSENCES}/${Endpoint.CREATE}/`;
    },
  },
  ABSENCES: 'absences',
  ALLOWANCE_TYPES: 'allowancetypes',
  AllowanceType: {
    allowanceTypes(id?: string): string {
      return `/${Endpoint.ALLOWANCE_TYPES}/${id ? `${id}/` : ''}`;
    },
  },
  CREATE: 'create',
  Department: {
    departments(id?: string): string {
      return `/${Endpoint.DEPARTMENTS}/${id ? `${id}/` : ''}`;
    },
  },
  DEPARTMENTS: 'departments',
  INVITE: 'invite',
  Location: {
    locations(id?: string): string {
      return `/${Endpoint.LOCATIONS}/${id ? `${id}/` : ''}`;
    },
  },
  LOCATIONS: 'locations',

  Reason: {
    reasons(id?: string): string {
      return `/${Endpoint.REASONS}/${id ? `${id}/` : ''}`;
    },
  },

  REASONS: 'reasons',

  Team: {
    teams(id?: string): string {
      return `/${Endpoint.TEAMS}/${id ? `${id}/` : ''}`;
    },
  },

  TEAMS: 'teams',

  Timespan: {
    create(): string {
      return `/${Endpoint.TIMESPANS}/${Endpoint.CREATE}/`;
    },

    timespans(id?: string): string {
      return `/${Endpoint.TIMESPANS}/${id ? `${id}/` : ''}`;
    },
  },

  TIMESPANS: 'timespans',

  User: {
    invite(): string {
      return `/${Endpoint.USERS}/${Endpoint.INVITE}/`;
    },

    users(id?: string): string {
      return `/${Endpoint.USERS}/${id ? `${id}/` : ''}`;
    },
  },

  USERS: 'users',
};
