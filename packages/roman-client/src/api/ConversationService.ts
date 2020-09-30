import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {Conversation, IncomingMessage, PostMessageResult} from '../interfaces';

export class ConversationService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  public async getConversation(): Promise<Conversation> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: '/conversation',
    };
    const response = await this.apiClient.request<Conversation>(config);
    return response.data;
  }

  public async postMessage(data?: IncomingMessage): Promise<PostMessageResult> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: '/conversation',
    };
    const response = await this.apiClient.request<PostMessageResult>(config);
    return response.data;
  }
}
