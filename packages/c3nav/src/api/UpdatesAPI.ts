import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Updates} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class UpdatesAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public async fetchUpdates(): Promise<Updates> {
    const endpoint = Endpoint.Updates.fetch();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getById(_id: number): Promise<Updates> {
    return this.fetchUpdates();
  }

  public async getList(): Promise<Updates[]> {
    const updates = await this.fetchUpdates();
    return [updates];
  }
}
