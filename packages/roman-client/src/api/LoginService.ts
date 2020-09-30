import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {SignIn} from '../interfaces';

export class LoginService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  public async postLogin(data?: SignIn): Promise<void> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: '/login',
    };
    await this.apiClient.request(config);
  }
}
