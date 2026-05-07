import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Routing, RoutingOptions, RoutingOptionsFormItem, RoutingRequest} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class RoutingAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Routing> {
    const endpoint = Endpoint.routing(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Routing[]> {
    const endpoint = Endpoint.routing();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getOptions(): Promise<RoutingOptions> {
    const endpoint = Endpoint.Routing.options();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getOptionsForm(): Promise<RoutingOptionsFormItem[]> {
    const endpoint = Endpoint.Routing.optionsForm();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async postRoute(request: RoutingRequest): Promise<Routing> {
    const endpoint = Endpoint.Routing.route();
    const {data} = await this.apiClient.post(endpoint, request);
    return data;
  }

  public async setOptions(options: Partial<RoutingOptions>): Promise<RoutingOptions> {
    const endpoint = Endpoint.Routing.options();
    const {data} = await this.apiClient.put(endpoint, options);
    return data;
  }
}
