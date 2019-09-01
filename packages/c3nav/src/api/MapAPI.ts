import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {Bounds, ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class MapAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /** /bounds/ returns the maximum bounds of the map */
  public async getBounds(): Promise<Bounds> {
    const endpoint = Endpoint.Map.bounds();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
