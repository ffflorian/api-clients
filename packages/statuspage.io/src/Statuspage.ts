import {APIClient} from '@ffflorian/api-client';

import {IncidentsAPI, ScheduledMaintenancesAPI, SubscribersAPI} from './api';
import {Endpoint} from './Endpoints';
import {API} from './interfaces/API';
import {ClientOptionsId, ClientOptionsUrl} from './interfaces/ClientOptions';
import {RequestOptions} from './interfaces/Request';
import {Components, Status, Summary} from './interfaces/Result';

export class Statuspage {
  private readonly apiClient: APIClient<RequestOptions>;
  public readonly api: API;

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

    this.apiClient = new APIClient({
      apiUrl,
    });

    this.api = {
      getComponents: this.getComponents.bind(this),
      getStatus: this.getStatus.bind(this),
      getSummary: this.getSummary.bind(this),
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
    this.apiClient.setApiUrl(newUrl);
  }

  /**
   * Get the components for the page. Each component is listed along with its status -
   * one of `operational`, `degraded_performance`, `partial_outage`, or `major_outage`.
   */
  private getComponents(): Promise<Components> {
    const endpoint = Endpoint.components();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Get the status rollup for the whole page. This endpoint includes an indicator -
   * one of `none`, `minor`, `major`, or `critical`, as well as a human description of the
   * blended component status. Examples of the blended status include "All Systems
   * Operational", "Partial System Outage", and "Major Service Outage".
   */
  private getStatus(): Promise<Status> {
    const endpoint = Endpoint.status();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Get a summary of the status page, including a status indicator, component statuses,
   * unresolved incidents, and any upcoming or in-progress scheduled maintenances.
   */
  private getSummary(): Promise<Summary> {
    const endpoint = Endpoint.summary();
    return this.apiClient.requestService.get(endpoint);
  }
}
