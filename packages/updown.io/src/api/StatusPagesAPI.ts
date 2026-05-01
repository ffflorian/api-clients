import type {APIClient} from '@ffflorian/api-client';

import type {Deleted, StatusPage, StatusPageOptions} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class StatusPagesAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  /** Add a new status page. */
  public async addStatusPage(options: StatusPageOptions): Promise<StatusPage> {
    const endpoint = Endpoint.statusPages();
    const {data} = await this.apiClient.post(endpoint, options);
    return data;
  }

  /** Delete a status page. */
  public async deleteStatusPage(token: string): Promise<Deleted> {
    const endpoint = Endpoint.statusPages(token);
    const {data} = await this.apiClient.delete(endpoint);
    return data;
  }

  /** List all status pages. */
  public async getStatusPages(): Promise<StatusPage[]> {
    const endpoint = Endpoint.statusPages();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }

  /** Update a status page. */
  public async updateStatusPage(token: string, options: StatusPageOptions): Promise<StatusPage> {
    const endpoint = Endpoint.statusPages(token);
    const {data} = await this.apiClient.put(endpoint, options);
    return data;
  }
}
