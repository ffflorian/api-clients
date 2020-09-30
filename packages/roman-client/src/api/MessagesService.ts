import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {OutgoingMessage} from '../interfaces';

export class MessagesService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  public async postMessage(data?: OutgoingMessage): Promise<void> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: '/messages',
    };
    await this.apiClient.request(config);
  }
}
