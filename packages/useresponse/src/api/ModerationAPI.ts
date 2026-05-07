import type {APIClient} from '@ffflorian/api-client';

import type {CommentModerateResponse, DeclineParams, TopicModerateResponse} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class ModerationAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async approveComment(commentId: string): Promise<CommentModerateResponse> {
    const endpoint = Endpoint.Moderation.approveComment(commentId);
    const {data} = await this.apiClient.post<CommentModerateResponse>(endpoint);
    return data;
  }

  async approveTopic(topicId: string): Promise<TopicModerateResponse> {
    const endpoint = Endpoint.Moderation.approveTopic(topicId);
    const {data} = await this.apiClient.post<TopicModerateResponse>(endpoint);
    return data;
  }

  async declineComment(commentId: string, params?: DeclineParams): Promise<CommentModerateResponse> {
    const endpoint = Endpoint.Moderation.declineComment(commentId);
    const {data} = await this.apiClient.post<CommentModerateResponse>(endpoint, params);
    return data;
  }

  async declineTopic(topicId: string, params?: DeclineParams): Promise<TopicModerateResponse> {
    const endpoint = Endpoint.Moderation.declineTopic(topicId);
    const {data} = await this.apiClient.post<TopicModerateResponse>(endpoint, params);
    return data;
  }
}
