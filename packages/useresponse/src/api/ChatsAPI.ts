import type {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Chat, APIResult, ChatMessagesPaginator} from '../interfaces';

export interface GetAllChatOptions {
  authorId?: string;
  page?: number;
}

export class ChatsAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getAllChats(options?: GetAllChatOptions): Promise<APIResult<Chat[]>> {
    const endpoint = Endpoint.Chats.chats();
    const {data} = await this.apiClient.get<APIResult<Chat[]>>(endpoint, {params: options});
    return data;
  }

  async getChat(chatId: string): Promise<APIResult<Chat>> {
    const endpoint = Endpoint.Chats.chat(chatId);
    const {data} = await this.apiClient.get<APIResult<Chat>>(endpoint);
    return data;
  }

  async getMessages(chatId: string): Promise<ChatMessagesPaginator> {
    const endpoint = Endpoint.Chats.messages(chatId);
    const {data} = await this.apiClient.get<ChatMessagesPaginator>(endpoint);
    return data;
  }
}
