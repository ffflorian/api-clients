import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Nodes, RequestOptions} from '../interfaces';

export class NodesAPI {
  private readonly apiClient: APIClient<RequestOptions>;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  /** List all updown.io monitoring nodes IPv4 addresses. */
  public getIpv4Nodes(): Promise<string[]> {
    const endpoint = Endpoint.Nodes.ipv4();
    return this.apiClient.requestService.get(endpoint);
  }

  /** List all updown.io monitoring nodes IPv6 addresses. */
  public getIpv6Nodes(): Promise<string[]> {
    const endpoint = Endpoint.Nodes.ipv6();
    return this.apiClient.requestService.get(endpoint);
  }

  /** List all updown.io monitoring nodes. */
  public getNodes(): Promise<Nodes> {
    const endpoint = Endpoint.nodes();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.setApiUrl(newUrl);
  }
}
