import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Check, CheckOptions, Deleted, Downtime, Metrics, MetricsOptions, RequestOptions} from '../interfaces';

export class ChecksAPI {
  private readonly apiClient: APIClient<RequestOptions>;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  /**
   * Add a new check.
   * @param url The URL you want to monitor.
   * @param options Further check adding options
   */
  public addCheck(url: string, options?: CheckOptions): Promise<Check> {
    const endpoint = Endpoint.checks();
    const params = {
      url,
      ...options,
    };
    return this.apiClient.requestService.post(endpoint, params);
  }

  /**
   * Delete a check.
   * @param token The check unique token
   */
  public deleteCheck(token: string): Promise<Deleted> {
    const endpoint = Endpoint.checks(token);
    return this.apiClient.requestService.delete(endpoint);
  }

  /**
   * Show a single check.
   * @param token The check unique token
   * @param metrics Include performance metrics (last hour only)
   */
  public getCheck(token: string, metrics?: boolean): Promise<Check> {
    const endpoint = Endpoint.Checks.check(token);
    return this.apiClient.requestService.get(endpoint, {data: {metrics}});
  }

  /** List all your checks. */
  public getChecks(): Promise<Check[]> {
    const endpoint = Endpoint.checks();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Get all the downtimes of a check.
   *
   * @param token The check unique token
   * @param page The page to fetch (100 per page)
   */
  public getDowntimes(token: string, page?: number): Promise<Downtime[]> {
    const endpoint = Endpoint.Checks.downtimes(token);
    return this.apiClient.requestService.get(endpoint, {params: {page}});
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
  public getMetrics(token: string, options?: MetricsOptions): Promise<Metrics> {
    const endpoint = Endpoint.Checks.downtimes(token);
    return this.apiClient.requestService.get(endpoint, {params: options});
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.requestService.setApiUrl(newUrl);
  }

  /**
   * Update a check.
   * @param token The check unique token
   * @param options Further check updating options
   */
  public updateCheck(token: string, options?: CheckOptions): Promise<Check> {
    const endpoint = Endpoint.checks(token);
    return this.apiClient.requestService.put(endpoint, {data: options});
  }
}
