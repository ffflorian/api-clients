import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {IncomingMessage} from '../interfaces';

export class BroadcastService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  public async postBroadcast(data?: IncomingMessage): Promise<void> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: '/broadcast',
    };
    await this.apiClient.request(config);
  }
}
