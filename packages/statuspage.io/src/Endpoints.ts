export const Endpoint = {
  ACTIVE_JSON: 'upcoming.json',
  API_V2_BASE: 'api/v2',
  COMPONENTS_JSON: 'components.json',
  INCIDENTS: 'incidents',
  INCIDENTS_JSON: 'incidents.json',
  SCHEDULED_MAINTENANCES: 'scheduled-maintenances',
  SCHEDULED_MAINTENANCES_JSON: 'scheduled-maintenances.json',
  STATUS_JSON: 'status.json',
  SUBSCRIBERS_JSON: 'subscribers.json',
  SUMMARY_JSON: 'summary.json',
  UNRESOLVED_JSON: 'unresolved.json',
  UPCOMING_JSON: 'upcoming.json',

  Incidents: {
    all(): string {
      return `/${Endpoint.API_V2_BASE}/${Endpoint.INCIDENTS_JSON}`;
    },

    unresolved(): string {
      return `/${Endpoint.API_V2_BASE}/${Endpoint.INCIDENTS}/${Endpoint.UNRESOLVED_JSON}`;
    },
  },

  ScheduledMaintenances: {
    active(): string {
      return `/${Endpoint.API_V2_BASE}/${Endpoint.SCHEDULED_MAINTENANCES}/${Endpoint.ACTIVE_JSON}`;
    },
    all(): string {
      return `/${Endpoint.API_V2_BASE}/${Endpoint.SCHEDULED_MAINTENANCES_JSON}`;
    },
    upcoming(): string {
      return `/${Endpoint.API_V2_BASE}/${Endpoint.SCHEDULED_MAINTENANCES}/${Endpoint.UPCOMING_JSON}`;
    },
  },

  components(): string {
    return `/${Endpoint.API_V2_BASE}/${Endpoint.COMPONENTS_JSON}`;
  },

  summary(): string {
    return `/${Endpoint.API_V2_BASE}/${Endpoint.SUMMARY_JSON}`;
  },

  status(): string {
    return `/${Endpoint.API_V2_BASE}/${Endpoint.STATUS_JSON}`;
  },

  subscribers(): string {
    return `/${Endpoint.API_V2_BASE}/${Endpoint.SUBSCRIBERS_JSON}`;
  },
};
