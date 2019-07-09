import {IncidentsAPI, ScheduledMaintenancesAPI, SubscribersAPI} from '../api';
import {Components, Status, Summary} from './Result';

export interface API {
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
  getComponents(): Promise<Components>;
  getStatus(): Promise<Status>;
  getSummary(): Promise<Summary>;
}
