import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {Check, CheckOptions, Deleted, Downtime, Metrics, MetricsOptions} from '../interfaces';

export class ChecksAPI {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * Add a new check.
   * @param url The URL you want to monitor.
   * @param options Further check adding options
   */
  public async addCheck(url: string, options?: CheckOptions): Promise<Check> {
    const endpoint = Endpoint.checks();
    const params = {
      url,
      ...options,
    };
    const {data} = await this.apiClient.post(endpoint, params);
    return data;
  }

  /**
   * Delete a check.
   * @param token The check unique token
   */
  public async deleteCheck(token: string): Promise<Deleted> {
    const endpoint = Endpoint.checks(token);
    const {data} = await this.apiClient.delete(endpoint);
    return data;
  }

  /**
   * Show a single check.
   * @param token The check unique token
   * @param metrics Include performance metrics (last hour only)
   */
  public async getCheck(token: string, metrics?: boolean): Promise<Check> {
    const endpoint = Endpoint.Checks.check(token);
    const {data} = await this.apiClient.get(endpoint, {data: {metrics}});
    return data;
  }

  /** List all your checks. */
  public async getChecks(): Promise<Check[]> {
    const endpoint = Endpoint.checks();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Get all the downtimes of a check.
   *
   * @param token The check unique token
   * @param page The page to fetch (100 per page)
   */
  public async getDowntimes(token: string, page?: number): Promise<Downtime[]> {
    const endpoint = Endpoint.Checks.downtimes(token);
    const {data} = await this.apiClient.get(endpoint, {params: {page}});
    return data;
  }

  /**
   * Get detailed metrics about the check.
   *
   * Statistic are aggregated per hour which means you can't get more
   * precise results than this. For example all requests performed
   * between 5:00 and 5:59 will be reported at 5:00 in this API.
   * The time range needs to be at least one hour to get data.
   *
   * @param token The check unique token
   * @param page The page to fetch (100 per page)
   */
  public async getMetrics(token: string, options?: MetricsOptions): Promise<Metrics> {
    const endpoint = Endpoint.Checks.downtimes(token);
    const {data} = await this.apiClient.get(endpoint, {params: options});
    return data;
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }

  /**
   * Update a check.
   * @param token The check unique token
   * @param options Further check updating options
   */
  public async updateCheck(token: string, options?: CheckOptions): Promise<Check> {
    const endpoint = Endpoint.checks(token);
    const {data} = await this.apiClient.put(endpoint, {data: options});
    return data;
  }
}
