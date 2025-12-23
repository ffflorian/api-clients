import type {APIClient} from '@ffflorian/api-client';
import type {LoginData, User} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class AuthAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async login(loginData: LoginData): Promise<User> {
    const endpoint = Endpoint.Auth.login();
    const {data} = await this.apiClient.post<User>(endpoint, loginData);
    return data;
  }
}
