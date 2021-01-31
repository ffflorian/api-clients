export namespace Endpoint {
  const ACTIVE_JSON = 'upcoming.json';
  const API_V2_BASE = 'api/v2';
  const COMPONENTS_JSON = 'components.json';
  const INCIDENTS = 'incidents';
  const INCIDENTS_JSON = 'incidents.json';
  const SCHEDULED_MAINTENANCES = 'scheduled-maintenances';
  const SCHEDULED_MAINTENANCES_JSON = 'scheduled-maintenances.json';
  const STATUS_JSON = 'status.json';
  const SUBSCRIBERS_JSON = 'subscribers.json';
  const SUMMARY_JSON = 'summary.json';
  const UNRESOLVED_JSON = 'unresolved.json';
  const UPCOMING_JSON = 'upcoming.json';

  export namespace Incidents {
    export function all(): string {
      return `/${API_V2_BASE}/${INCIDENTS_JSON}`;
    }

    export function unresolved(): string {
      return `/${API_V2_BASE}/${INCIDENTS}/${UNRESOLVED_JSON}`;
    }
  }

  export namespace ScheduledMaintenances {
    export function active(): string {
      return `/${API_V2_BASE}/${SCHEDULED_MAINTENANCES}/${ACTIVE_JSON}`;
    }
    export function all(): string {
      return `/${API_V2_BASE}/${SCHEDULED_MAINTENANCES_JSON}`;
    }
    export function upcoming(): string {
      return `/${API_V2_BASE}/${SCHEDULED_MAINTENANCES}/${UPCOMING_JSON}`;
    }
  }

  export function components(): string {
    return `/${API_V2_BASE}/${COMPONENTS_JSON}`;
  }

  export function summary(): string {
    return `/${API_V2_BASE}/${SUMMARY_JSON}`;
  }

  export function status(): string {
    return `/${API_V2_BASE}/${STATUS_JSON}`;
  }

  export function subscribers(): string {
    return `/${API_V2_BASE}/${SUBSCRIBERS_JSON}`;
  }
}
