import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {Nodes} from '../interfaces';

export class NodesAPI {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /** List all updown.io monitoring nodes IPv4 addresses. */
  public async getIpv4Nodes(): Promise<string[]> {
    const endpoint = Endpoint.Nodes.ipv4();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /** List all updown.io monitoring nodes IPv6 addresses. */
  public async getIpv6Nodes(): Promise<string[]> {
    const endpoint = Endpoint.Nodes.ipv6();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /** List all updown.io monitoring nodes. */
  public async getNodes(): Promise<Nodes> {
    const endpoint = Endpoint.nodes();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }
}
