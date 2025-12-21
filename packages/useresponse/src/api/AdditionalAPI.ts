import type {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {LoginData} from '../interfaces';

export class AdditionalAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }
}
