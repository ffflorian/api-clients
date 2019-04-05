import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../Endpoints';
import {ClientOptions, Routing} from '../interfaces/';
import {APIBase} from './APIBase';

export class RoutingAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Routing[]> {
    const endpoint = Endpoint.routing();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Routing> {
    const endpoint = Endpoint.routing(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
