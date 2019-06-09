import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Bounds, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class MapAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /** /bounds/ returns the maximum bounds of the map */
  public getBounds(): Promise<Bounds> {
    const endpoint = Endpoint.Map.bounds();
    return this.apiClient.requestService.get(endpoint);
  }
}
