import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Level, LevelListOptions} from '../interfaces';
import {APIBase} from './APIBase';

/**
 * A Level is a Location – so if it is visible, you can use its ID in the Location API as well.
 */
export class LevelListAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getDetail(id: number, options?: LevelListOptions): Promise<Level> {
    const endpoint = Endpoint.Level.levels(id);
    return this.apiClient.requestService.get(endpoint, {data: options});
  }

  public getList(options?: LevelListOptions): Promise<Level[]> {
    const endpoint = Endpoint.Level.levels();
    return this.apiClient.requestService.get(endpoint, {data: options});
  }
}
