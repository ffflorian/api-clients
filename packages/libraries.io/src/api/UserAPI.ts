import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {
  ClientOptions,
  LibrariesIOHeaders,
  LibrariesIOResult,
  PaginationOptions,
  PlatformType,
  PreReleaseOptions,
  Subscription,
} from '../interfaces/';
import {APIBase} from './APIBase';

export class UserAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * List packages that a user is subscribed to recieved notifications about new releases.
   * @see https://libraries.io/api#subscriptions-index
   * @param options Pagination options
   */
  public async getAllSubscriptions(options?: PaginationOptions): Promise<LibrariesIOResult<Subscription[]>> {
    const endpoint = Endpoint.subscriptions();
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }

  /**
   * Check if a users is subscribed to receive notifications about new releases of a project.
   * @see https://libraries.io/api#subscriptions-show
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public async getSubscription(
    platform: PlatformType,
    projectName: string
  ): Promise<LibrariesIOResult<Subscription | null>> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Subscribe to receive notifications about new releases of a project.
   * @see https://libraries.io/api#subscriptions-create
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Subscription options
   */
  public async subscribe(
    platform: PlatformType,
    projectName: string,
    options?: PreReleaseOptions
  ): Promise<LibrariesIOResult<Subscription>> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    const {data} = await this.apiClient.post(endpoint, {data: options});
    return data;
  }

  /**
   * Stop receiving release notifications from a project.
   * @see https://libraries.io/api#subscriptions-destroy
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   */
  public async unsubscribe(platform: PlatformType, projectName: string): Promise<LibrariesIOHeaders> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    const {data} = await this.apiClient.delete(endpoint);
    return data;
  }

  /**
   * Update the options for a subscription.
   * @see https://libraries.io/api#subscriptions-update
   * @param platform The project platform (e.g. "npm", "cargo", ...)
   * @param projectName The project name
   * @param options Subscription options
   */
  public async updateSubscription(
    platform: PlatformType,
    projectName: string,
    options?: PreReleaseOptions
  ): Promise<LibrariesIOResult<Subscription>> {
    const endpoint = Endpoint.subscriptions(platform, projectName);
    const {data} = await this.apiClient.put(endpoint, {data: options});
    return data;
  }
}
