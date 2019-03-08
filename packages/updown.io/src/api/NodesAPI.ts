import {URL} from 'url';

import {Endpoint} from '../Endpoints';
import {Nodes} from '../interfaces';
import {RequestService} from '../RequestService';

export class NodesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /** List all updown.io monitoring nodes. */
  public getNodes(): Promise<Nodes> {
    const endpoint = Endpoint.nodes();
    return this.requestService.get(endpoint);
  }

  /** List all updown.io monitoring nodes IPv4 addresses. */
  public getIpv4Nodes(): Promise<string[]> {
    const endpoint = Endpoint.Nodes.ipv4();
    return this.requestService.get(endpoint);
  }

  /** List all updown.io monitoring nodes IPv6 addresses. */
  public getIpv6Nodes(): Promise<string[]> {
    const endpoint = Endpoint.Nodes.ipv6();
    return this.requestService.get(endpoint);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: URL): void {
    this.requestService.setApiUrl(newUrl);
  }
}
