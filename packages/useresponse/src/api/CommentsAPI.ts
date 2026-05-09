import type {APIClient} from '@ffflorian/api-client';

import type {CommentActionResponse, CommentAddParams, CommentEditParams, CommentsListResponse} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class CommentsAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async addComment(comment: CommentAddParams): Promise<CommentActionResponse> {
    const endpoint = Endpoint.Comments.comments();
    const {data} = await this.apiClient.post<CommentActionResponse>(endpoint, comment);
    return data;
  }

  async editComment(commentId: string, comment: CommentEditParams): Promise<CommentActionResponse> {
    const endpoint = Endpoint.Comments.editComment(commentId);
    const {data} = await this.apiClient.post<CommentActionResponse>(endpoint, comment);
    return data;
  }

  async getComments(options?: Record<string, unknown>): Promise<CommentsListResponse> {
    const endpoint = Endpoint.Comments.comments();
    const {data} = await this.apiClient.get<CommentsListResponse>(endpoint, {params: options});
    return data;
  }

  async getObjectComments(objectId: string): Promise<CommentsListResponse> {
    const endpoint = Endpoint.Comments.objectComments(objectId);
    const {data} = await this.apiClient.get<CommentsListResponse>(endpoint);
    return data;
  }

  async recoverComment(commentId: string): Promise<CommentActionResponse> {
    const endpoint = Endpoint.Comments.recoveryComment(commentId);
    const {data} = await this.apiClient.post<CommentActionResponse>(endpoint);
    return data;
  }

  async toggleBestComment(commentId: string): Promise<CommentActionResponse> {
    const endpoint = Endpoint.Comments.toggleBestComment(commentId);
    const {data} = await this.apiClient.post<CommentActionResponse>(endpoint);
    return data;
  }

  async toggleVoteComment(commentId: string): Promise<CommentActionResponse> {
    const endpoint = Endpoint.Comments.toggleVoteComment(commentId);
    const {data} = await this.apiClient.post<CommentActionResponse>(endpoint);
    return data;
  }

  async trashComment(commentId: string): Promise<CommentActionResponse> {
    const endpoint = Endpoint.Comments.trashComment(commentId);
    const {data} = await this.apiClient.post<CommentActionResponse>(endpoint);
    return data;
  }
}
