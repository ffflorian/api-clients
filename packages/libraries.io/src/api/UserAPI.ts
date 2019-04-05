import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../Endpoints';
import {
  ClientOptions,
  LibrariesIOHeaders,
  PaginationOptions,
  PlatformType,
  PreReleaseOptions,
  Subscription,
} from '../interfaces/';
import {APIBase} from './APIBase';

export class UserAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Check if a users is subscribed to receive notifications about new releases of a project.
   * @see https://libraries.io/api#subscriptions-show
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public getSubscription(platform: PlatformType, projectName: string): Promise<Subscription | null> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * List packages that a user is subscribed to recieved notifications about new releases.
   * @see https://libraries.io/api#subscriptions-index
   * @param options Pagination options
   */
  public getAllSubscriptions(options?: PaginationOptions): Promise<Subscription[]> {
    const endpoint = Endpoint.subscriptions();
    return this.apiClient.requestService.get(endpoint, {data: options});
  }

  /**
   * Subscribe to receive notifications about new releases of a project.
   * @see https://libraries.io/api#subscriptions-create
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Subscription options
   */
  public subscribe(platform: PlatformType, projectName: string, options?: PreReleaseOptions): Promise<Subscription> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.apiClient.requestService.post(endpoint, {data: options});
  }

  /**
   * Stop receiving release notifications from a project.
   * @see https://libraries.io/api#subscriptions-destroy
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public unsubscribe(platform: PlatformType, projectName: string): Promise<LibrariesIOHeaders> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.apiClient.requestService.delete(endpoint);
  }

  /**
   * Update the options for a subscription.
   * @see https://libraries.io/api#subscriptions-update
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Subscription options
   */
  public updateSubscription(
    platform: PlatformType,
    projectName: string,
    options?: PreReleaseOptions
  ): Promise<Subscription> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    return this.apiClient.requestService.put(endpoint, {data: options});
  }
}
