import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {User} from '../interfaces';

export class UsersService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  public async getUser(userId: string): Promise<User> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `/users/${userId}`,
    };
    const response = await this.apiClient.request<User>(config);
    return response.data;
  }
}
