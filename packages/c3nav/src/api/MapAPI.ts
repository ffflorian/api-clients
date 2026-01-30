import type {APIClient} from '@ffflorian/api-client';

import type {Bounds, ClientOptions} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class MapAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /** /bounds/ returns the maximum bounds of the map */
  public async getBounds(): Promise<Bounds> {
    const endpoint = Endpoint.Map.bounds();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
