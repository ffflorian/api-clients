import type {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';

export class ReportsAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }
}
