export const Endpoint = {
  ABSENCES: 'absences',
  CREATE: 'create',
  ALLOWANCE_TYPES: 'allowancetypes',
  DEPARTMENTS: 'departments',
  INVITE: 'invite',
  LOCATIONS: 'locations',
  REASONS: 'reasons',
  TEAMS: 'teams',
  USERS: 'users',
  TIMESPANS: 'timespans',

  Absence: {
    absences(id?: string): string {
      return `/${Endpoint.ABSENCES}/${id ? `${id}/` : ''}`;
    },

    create(): string {
      return `/${Endpoint.ABSENCES}/${Endpoint.CREATE}/`;
    },
  },

  AllowanceType: {
    allowanceTypes(id?: string): string {
      return `/${Endpoint.ALLOWANCE_TYPES}/${id ? `${id}/` : ''}`;
    },
  },

  Department: {
    departments(id?: string): string {
      return `/${Endpoint.DEPARTMENTS}/${id ? `${id}/` : ''}`;
    },
  },

  Location: {
    locations(id?: string): string {
      return `/${Endpoint.LOCATIONS}/${id ? `${id}/` : ''}`;
    },
  },

  Reason: {
    reasons(id?: string): string {
      return `/${Endpoint.REASONS}/${id ? `${id}/` : ''}`;
    },
  },

  Team: {
    teams(id?: string): string {
      return `/${Endpoint.TEAMS}/${id ? `${id}/` : ''}`;
    },
  },

  Timespan: {
    create(): string {
      return `/${Endpoint.TIMESPANS}/${Endpoint.CREATE}/`;
    },

    timespans(id?: string): string {
      return `/${Endpoint.TIMESPANS}/${id ? `${id}/` : ''}`;
    },
  },

  User: {
    invite(): string {
      return `/${Endpoint.USERS}/${Endpoint.INVITE}/`;
    },

    users(id?: string): string {
      return `/${Endpoint.USERS}/${id ? `${id}/` : ''}`;
    },
  },
};
