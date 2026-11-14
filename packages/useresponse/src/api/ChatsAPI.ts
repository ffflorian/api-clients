import type {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import type {ChatMessagesPaginator, ChatsResponse, GetChatResponse} from '../interfaces';

export interface GetAllChatOptions {
  authorId?: number;
  page?: number;
}

export class ChatsAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getAllChats(options?: GetAllChatOptions): Promise<ChatsResponse> {
    const endpoint = Endpoint.Chats.chats();
    const {data} = await this.apiClient.get<ChatsResponse>(endpoint, {params: options});
    return data;
  }

  async getChat(chatId: string): Promise<GetChatResponse> {
    const endpoint = Endpoint.Chats.chat(chatId);
    const {data} = await this.apiClient.get<GetChatResponse>(endpoint);
    return data;
  }

  async getMessages(chatId: string): Promise<ChatMessagesPaginator> {
    const endpoint = Endpoint.Chats.messages(chatId);
    const {data} = await this.apiClient.get<ChatMessagesPaginator>(endpoint);
    return data;
  }
}
