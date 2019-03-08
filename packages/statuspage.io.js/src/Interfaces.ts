import {IncidentsAPI, ScheduledMaintenancesAPI, SubscribersAPI} from './api/';

export interface ClientOptionsUrl {
  /** The StatusPage client page URL (e.g. `https://www.traviscistatus.com`) */
  pageUrl: string;
}

export interface ClientOptionsId {
  /** The StatusPage client page ID (e.g. `pnpcptp8xh9k`) */
  pageId: string;
}

export namespace HTTP {
  export type Method = 'delete' | 'get' | 'post' | 'put';

  export enum Status {
    NO_CONTENT = 204,
    FOUND = 302,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    TOO_MANY_REQUESTS = 429,
  }
}

export namespace Result {
  export interface Component {
    created_at: string;
    description: string | null;
    group_id: string | null;
    id: string;
    name: string;
    page_id: string;
    position: number;
    showcase: boolean;
    status: string;
    updated_at: string;
  }

  export interface Page {
    page: {
      id: string;
      name: string;
      url: string;
    };
  }

  export interface Incidents extends Page {
    incidents: Incident[];
  }

  export interface Components extends Page {
    components: Component[];
  }

  export interface ScheduledMaintenance extends Incident {
    scheduled_for: string;
    scheduled_until: string;
  }

  export interface ScheduledMaintenances extends Page {
    scheduled_maintenances: ScheduledMaintenance[];
  }

  export interface Subscriber extends Page {
    can_select_components: boolean;
  }

  export interface WebhookSubscriber extends Subscriber {
    mode: 'webhook';
    webhook: string;
  }

  export interface EmailSubscriber extends Subscriber {
    mode: 'email_sms';
    email: string;
  }

  export interface PhoneSubscriber extends Subscriber {
    mode: 'email_sms';
    phone: string;
  }

  export interface Incident {
    created_at: string;
    id: string;
    impact: string;
    incident_updates: IncidentUpdate[];
    monitoring_at: string | null;
    name: string;
    page_id: string;
    resolved_at: string | null;
    shortlink: string;
    status: string;
    updated_at: string;
  }

  export interface IncidentUpdate {
    body: string;
    created_at: string;
    display_at: string;
    id: string;
    incident_id: string;
    status: string;
    updated_at: string;
  }

  export interface Status extends Page {
    status: {
      indicator: string;
      description: string;
    };
  }

  export type CombinedSubscriber = PhoneSubscriber | EmailSubscriber | WebhookSubscriber;
  export type Summary = Status & ScheduledMaintenance & Components & Incidents;
}

export namespace Request {
  export interface ComponentSubscriberData {
    component_id: string;
  }

  export interface EmailSubscriberData {
    email: string;
  }

  export interface IncidentSubscriberData {
    incident_id: string;
  }

  export interface Options {
    subscriber?: CombinedSubscriberData | (CombinedSubscriberData & IncidentSubscriberData) | {id: string};
  }

  export interface PhoneSubscriberData {
    phone_number: string;
    /** Defaults to `us` if not supplied. */
    phone_country?: string;
  }

  export interface SubscriberOptions {
    isSubscribed: boolean;
  }

  export interface WebhookSubscriberData extends EmailSubscriberData {
    endpoint: string;
  }

  export type CombinedSubscriberData = PhoneSubscriberData | EmailSubscriberData | WebhookSubscriberData;
}

export interface API {
  getComponents(): Promise<Result.Components>;
  getStatus(): Promise<Result.Status>;
  getSummary(): Promise<Result.Summary>;
  /**
   * Incidents are the cornerstone of any status page, being composed of many incident
   * updates. Each incident usually goes through a progression of statuses listed below,
   * with an impact calculated from a blend of component statuses (or an optional override).
   *
   * **Status**: *Investigating*, *Identified*, *Monitoring*, *Resolved*, or *Postmortem*
   *
   * **Impact**: *None (black*), *Minor (yellow*), *Major (orange*), or *Critical (red)*
   */
  incidents: IncidentsAPI;
  /**
   * Scheduled Maintenances are planned outages, upgrades, or general notices that
   * you're working on infrastructure and disruptions may occurr. A close sibling
   * of Incidents, each usually goes through a progression of statuses listed below,
   * with an impact calculated from a blend of component statuses (or an optional
   * override).
   *
   * **Status**: *Scheduled*, *In Progress*, *Verifying*, or *Completed*
   *
   * **Impact**: *None (black)*, *Minor (yellow)*, *Major (orange)*, or *Critical (red)*
   */
  scheduledMaintenances: ScheduledMaintenancesAPI;
  /**
   * Subscribers receive notifications via a webhook, email or SMS. You can create and
   * disable subscriptions for pages and unresolved incidents using the subscribers api.
   */
  subscribers: SubscribersAPI;
}
