import type {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {LoginData} from '../interfaces';

export class AuthAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  login(loginData: LoginData) {
    const endpoint = Endpoint.Auth.login();
    return this.apiClient.post<{token: string}>(endpoint);
  }
}
