export namespace Endpoint {
  const ABSENCES = 'absences';
  const CREATE = 'create';
  const ALLOWANCE_TYPES = 'allowancetypes';
  const DEPARTMENTS = 'departments';
  const INVITE = 'invite';
  const LOCATIONS = 'locations';
  const REASONS = 'reasons';
  const TEAMS = 'teams';
  const USERS = 'users';
  const TIMESPANS = 'timespans';

  export namespace Absence {
    export function absences(id?: string): string {
      return `/${ABSENCES}/${id ? `${id}/` : ''}`;
    }

    export function create(): string {
      return `/${ABSENCES}/${CREATE}/`;
    }
  }

  export namespace AllowanceType {
    export function allowanceTypes(id?: string): string {
      return `/${ALLOWANCE_TYPES}/${id ? `${id}/` : ''}`;
    }
  }

  export namespace Department {
    export function departments(id?: string): string {
      return `/${DEPARTMENTS}/${id ? `${id}/` : ''}`;
    }
  }

  export namespace Location {
    export function locations(id?: string): string {
      return `/${LOCATIONS}/${id ? `${id}/` : ''}`;
    }
  }

  export namespace Reason {
    export function reasons(id?: string): string {
      return `/${REASONS}/${id ? `${id}/` : ''}`;
    }
  }

  export namespace Team {
    export function teams(id?: string): string {
      return `/${TEAMS}/${id ? `${id}/` : ''}`;
    }
  }

  export namespace Timespan {
    export function create(): string {
      return `/${TIMESPANS}/${CREATE}/`;
    }

    export function timespans(id?: string): string {
      return `/${TIMESPANS}/${id ? `${id}/` : ''}`;
    }
  }

  export namespace User {
    export function invite(): string {
      return `/${USERS}/${INVITE}/`;
    }

    export function users(id?: string): string {
      return `/${USERS}/${id ? `${id}/` : ''}`;
    }
  }
}
