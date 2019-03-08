import {URL} from 'url';

import {Endpoint} from '../Endpoints';
import {Check, CheckOptions, Deleted, Downtime, Metrics, MetricsOptions} from '../interfaces';
import {RequestService} from '../RequestService';

export class ChecksAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  private checkApiKey() {
    if (!this.requestService.isApiKeySet()) {
      throw new Error('An API key needs to be set in order to use the checks API.');
    }
  }

  /**
   * Show a single check.
   * @param token The check unique token
   * @param metrics Include performance metrics (last hour only)
   */
  public getCheck(token: string, metrics?: boolean): Promise<Check> {
    this.checkApiKey();
    const endpoint = Endpoint.Checks.check(token);
    return this.requestService.get(endpoint, {metrics});
  }

  /** List all your checks. */
  public getChecks(): Promise<Check[]> {
    this.checkApiKey();
    const endpoint = Endpoint.checks();
    return this.requestService.get(endpoint);
  }

  /**
   * Get all the downtimes of a check.
   * @param token The check unique token
   * @param page The page to fetch (100 per page)
   */
  public getDowntimes(token: string, page?: number): Promise<Downtime[]> {
    this.checkApiKey();
    const endpoint = Endpoint.Checks.downtimes(token);
    return this.requestService.get(endpoint, {page});
  }

  /**
   * Get all the downtimes of a check.
   *
   * Statistic are aggregated per hour which means you can't get more precise results than this. For example all requests performed between 5:00 and 5:59 will be reported at 5:00 in this API. The time range needs to be at least one hour to get data.
   * @param token The check unique token
   * @param page The page to fetch (100 per page)
   */
  public getMetrics(token: string, options?: MetricsOptions): Promise<Metrics> {
    this.checkApiKey();
    const endpoint = Endpoint.Checks.downtimes(token);
    return this.requestService.get(endpoint, options);
  }

  /**
   * Add a new check.
   * @param url The URL you want to monitor.
   * @param options Further check adding options
   */
  public addCheck(url: string, options?: CheckOptions): Promise<Check> {
    this.checkApiKey();
    const endpoint = Endpoint.checks();
    const params = {
      url,
      ...options,
    };
    return this.requestService.post(endpoint, params);
  }

  /**
   * Update a check.
   * @param token The check unique token
   * @param options Further check updating options
   */
  public updateCheck(token: string, options?: CheckOptions): Promise<Check> {
    this.checkApiKey();
    const endpoint = Endpoint.checks(token);
    return this.requestService.put(endpoint, options);
  }

  /**
   * Delete a check.
   * @param token The check unique token
   */
  public deleteCheck(token: string): Promise<Deleted> {
    this.checkApiKey();
    const endpoint = Endpoint.checks(token);
    return this.requestService.delete(endpoint);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: URL): void {
    this.requestService.setApiUrl(newUrl);
  }
}
