import {IncidentsAPI, ScheduledMaintenancesAPI, SubscribersAPI} from './api';
import {Endpoint} from './Endpoints';
import type {API} from './interfaces/API';
import type {Components, Status, Summary} from './interfaces/Result';

export class Statuspage {
  public readonly api: API;
  private baseURL: string;

  constructor(pageId: string) {
    if (!pageId) {
      throw new Error('A page ID needs to be set in order to use the client.');
    }

    this.baseURL = `https://${pageId}.statuspage.io`;

    this.api = {
      getComponents: this.getComponents,
      getStatus: this.getStatus,
      getSummary: this.getSummary,
      incidents: new IncidentsAPI(this.baseURL),
      scheduledMaintenances: new ScheduledMaintenancesAPI(this.baseURL),
      subscribers: new SubscribersAPI(this.baseURL),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.baseURL = newUrl;
    this.api.incidents = new IncidentsAPI(this.baseURL);
    this.api.scheduledMaintenances = new ScheduledMaintenancesAPI(this.baseURL);
    this.api.subscribers = new SubscribersAPI(this.baseURL);
  }

  /**
   * Get the components for the page. Each component is listed along with its status -
   * one of `operational`, `degraded_performance`, `partial_outage`, or `major_outage`.
   */
  private readonly getComponents = async (): Promise<Components> => {
    const endpoint = Endpoint.components();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  };

  /**
   * Get the status rollup for the whole page. This endpoint includes an indicator -
   * one of `none`, `minor`, `major`, or `critical`, as well as a human description of the
   * blended component status. Examples of the blended status include "All Systems
   * Operational", "Partially Degraded Service", and "Major Service Outage".
   */
  private readonly getStatus = async (): Promise<Status> => {
    const endpoint = Endpoint.status();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  };

  /**
   * Get a summary of the status page, including a status indicator, component statuses,
   * unresolved incidents, and any upcoming or in-progress scheduled maintenances.
   */
  private readonly getSummary = async (): Promise<Summary> => {
    const endpoint = Endpoint.summary();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  };
}
