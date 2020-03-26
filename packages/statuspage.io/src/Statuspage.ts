import axios, {AxiosInstance} from 'axios';

import {IncidentsAPI, ScheduledMaintenancesAPI, SubscribersAPI} from './api';
import {Endpoint} from './Endpoints';
import type {API} from './interfaces/API';
import type {ClientOptionsId, ClientOptionsUrl} from './interfaces/ClientOptions';
import type {Components, Status, Summary} from './interfaces/Result';

export class Statuspage {
  public readonly api: API;
  private readonly apiClient: AxiosInstance;

  constructor(apiUrlOrPageId: string);
  constructor(options: ClientOptionsId);
  constructor(options: ClientOptionsUrl);
  constructor(options: ClientOptionsId | ClientOptionsUrl | string) {
    if (typeof options === 'string') {
      options = options.startsWith('http') ? {pageUrl: options} : {pageId: options};
    }

    if (!(options as ClientOptionsUrl).pageUrl && !(options as ClientOptionsId).pageId) {
      throw new Error('A StatusPage URL or page ID needs to be set in order to use the client.');
    }

    const apiUrl =
      (options as ClientOptionsUrl).pageUrl || `https://${(options as ClientOptionsId).pageId}.statuspage.io`;

    this.apiClient = axios.create({
      baseURL: apiUrl,
    });

    this.api = {
      getComponents: this.getComponents,
      getStatus: this.getStatus,
      getSummary: this.getSummary,
      incidents: new IncidentsAPI(this.apiClient),
      scheduledMaintenances: new ScheduledMaintenancesAPI(this.apiClient),
      subscribers: new SubscribersAPI(this.apiClient),
    };
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }

  /**
   * Get the components for the page. Each component is listed along with its status -
   * one of `operational`, `degraded_performance`, `partial_outage`, or `major_outage`.
   */
  private readonly getComponents = async (): Promise<Components> => {
    const endpoint = Endpoint.components();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  };

  /**
   * Get the status rollup for the whole page. This endpoint includes an indicator -
   * one of `none`, `minor`, `major`, or `critical`, as well as a human description of the
   * blended component status. Examples of the blended status include "All Systems
   * Operational", "Partial System Outage", and "Major Service Outage".
   */
  private readonly getStatus = async (): Promise<Status> => {
    const endpoint = Endpoint.status();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  };

  /**
   * Get a summary of the status page, including a status indicator, component statuses,
   * unresolved incidents, and any upcoming or in-progress scheduled maintenances.
   */
  private readonly getSummary = async (): Promise<Summary> => {
    const endpoint = Endpoint.summary();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  };
}
