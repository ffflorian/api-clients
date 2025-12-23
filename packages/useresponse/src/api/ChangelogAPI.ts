import type {APIClient} from '@ffflorian/api-client';
import type { Changelog } from '../interfaces';

import {Endpoint} from '../Endpoints';

export class ChangelogAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getObjectsChangelog(objectId: string): Promise<Changelog[]> {
    const endpoint = Endpoint.Changelog.objects(objectId);
    const {data} = await this.apiClient.get<Changelog[]>(endpoint);
    return data;
  }

  async getUsersChangelog(userId: string): Promise<Changelog[]> {
    const endpoint = Endpoint.Changelog.users(userId);
    const {data} = await this.apiClient.get<Changelog[]>(endpoint);
    return data;
  }
}
