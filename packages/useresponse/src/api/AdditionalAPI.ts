import type {APIClient} from '@ffflorian/api-client';
import type {LoginData} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class AdditionalAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }
}
