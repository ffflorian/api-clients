export enum IncidentImpact {
  Critical = 'critical',
  Major = 'major',
  Minor = 'minor',
  None = 'none',
}

export enum IncidentStatus {
  Identified = 'identified',
  Investigating = 'investigating',
  Monitoring = 'monitoring',
  Postmortem = 'postmortem',
  Resolved = 'resolved',
}

export enum MaintenanceStatus {
  Completed = 'completed',
  InProgress = 'in_progress',
  Scheduled = 'scheduled',
  Verifying = 'verifying',
}

export type CombinedSubscriber = EmailSubscriber | PhoneSubscriber | WebhookSubscriber;

export interface Component {
  created_at: string;
  description: null | string;
  group: boolean;
  group_id: null | string;
  id: string;
  name: string;
  only_show_if_degraded: boolean;
  page_id: string;
  position: number;
  showcase: boolean;
  start_date: null | string;
  status: string;
  updated_at: string;
}

export interface Components extends Page {
  components: Component[];
}

export interface EmailSubscriber extends Subscriber {
  email: string;
  mode: 'email_sms';
}

export interface Incident {
  created_at: string;
  id: string;
  impact: IncidentImpact;
  incident_updates: IncidentUpdate[];
  monitoring_at: null | string;
  name: string;
  page_id: string;
  resolved_at: null | string;
  shortlink: string;
  status: IncidentStatus;
  updated_at: string;
}

export interface Incidents extends Page {
  incidents: Incident[];
}

export interface IncidentUpdate {
  body: string;
  created_at: string;
  display_at: string;
  id: string;
  incident_id: string;
  status: IncidentStatus;
  updated_at: string;
}

export interface Page {
  page: {
    id: string;
    name: string;
    time_zone: string;
    updated_at: string;
    url: string;
  };
}

export interface PhoneSubscriber extends Subscriber {
  mode: 'email_sms';
  phone: string;
}

export type ScheduledMaintenance = {
  scheduled_for: string;
  scheduled_until: string;
  status: MaintenanceStatus;
} & Omit<Incident, 'status'>;

export interface ScheduledMaintenances extends Page {
  scheduled_maintenances: ScheduledMaintenance[];
}

export interface Status extends Page {
  status: {
    description: string;
    indicator: string;
  };
}

export interface Subscriber extends Page {
  can_select_components: boolean;
}

export type Summary = Components & Incidents & ScheduledMaintenances & Status;

export interface WebhookSubscriber extends Subscriber {
  mode: 'webhook';
  webhook: string;
}
