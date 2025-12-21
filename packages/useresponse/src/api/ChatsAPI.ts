import type {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';

export class ChatsAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }
}
