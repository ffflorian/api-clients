import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {NewService} from '../interfaces';

export class RegisterService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  public async postRegister(data?: NewService): Promise<void> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: '/register',
    };
    await this.apiClient.request(config);
  }
}
