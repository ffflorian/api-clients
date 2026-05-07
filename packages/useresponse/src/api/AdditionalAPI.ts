import type {APIClient} from '@ffflorian/api-client';

import type {Forum, Status} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class AdditionalAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getForums(): Promise<Forum[]> {
    const endpoint = Endpoint.Additional.forums();
    const {data} = await this.apiClient.get<Forum[]>(endpoint);
    return data;
  }

  async getStatuses(): Promise<Status[]> {
    const endpoint = Endpoint.Additional.statuses();
    const {data} = await this.apiClient.get<Status[]>(endpoint);
    return data;
  }
}
