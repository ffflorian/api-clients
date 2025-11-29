import type {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, Level, LevelListOptions} from '../interfaces';
import {APIBase} from './APIBase';

/**
 * A Level is a Location – so if it is visible, you can use its ID in the Location API as well.
 */
export class LevelListAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public async getDetail(id: number, options?: LevelListOptions): Promise<Level> {
    const endpoint = Endpoint.Level.levels(id);
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }

  public async getList(options?: LevelListOptions): Promise<Level[]> {
    const endpoint = Endpoint.Level.levels();
    const {data} = await this.apiClient.get(endpoint, {data: options});
    return data;
  }
}
