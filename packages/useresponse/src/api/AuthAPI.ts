import type {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {LoginData, User} from '../interfaces';

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
