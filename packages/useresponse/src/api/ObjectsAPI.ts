import type {APIClient} from '@ffflorian/api-client';

import type {
  CreateObjectResponse,
  EditObjectResponse,
  ObjectAddParams,
  ObjectEditParams,
  Paginator,
  SearchResponse,
  Object as UseResponseObject,
} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class ObjectsAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async addObject(object: ObjectAddParams): Promise<CreateObjectResponse> {
    const endpoint = Endpoint.Objects.objects();
    const {data} = await this.apiClient.post<CreateObjectResponse>(endpoint, object);
    return data;
  }

  async archiveObject(objectId: string): Promise<EditObjectResponse> {
    const endpoint = Endpoint.Objects.archive(objectId);
    const {data} = await this.apiClient.get<EditObjectResponse>(endpoint);
    return data;
  }

  async attachFile(
    objectId: string,
    file: NonNullable<ObjectAddParams['attachments']>[number]
  ): Promise<EditObjectResponse> {
    const endpoint = Endpoint.Objects.attachFile(objectId);
    const {data} = await this.apiClient.post<EditObjectResponse>(endpoint, file);
    return data;
  }

  async deleteObject(objectId: string): Promise<EditObjectResponse> {
    const endpoint = Endpoint.Objects.object(objectId);
    const {data} = await this.apiClient.delete<EditObjectResponse>(endpoint);
    return data;
  }

  async editObject(objectId: string, object: ObjectEditParams): Promise<EditObjectResponse> {
    const endpoint = Endpoint.Objects.object(objectId);
    const {data} = await this.apiClient.put<EditObjectResponse>(endpoint, object);
    return data;
  }

  async getObject(objectId: string): Promise<UseResponseObject> {
    const endpoint = Endpoint.Objects.object(objectId);
    const {data} = await this.apiClient.get<UseResponseObject>(endpoint);
    return data;
  }

  async getTickets(options?: Record<string, unknown>): Promise<Paginator> {
    const endpoint = Endpoint.Objects.tickets();
    const {data} = await this.apiClient.get<Paginator>(endpoint, {params: options});
    return data;
  }

  async search(options?: Record<string, unknown>): Promise<SearchResponse> {
    const endpoint = Endpoint.Objects.search();
    const {data} = await this.apiClient.get<SearchResponse>(endpoint, {params: options});
    return data;
  }

  async subscribe(objectId: string): Promise<EditObjectResponse> {
    const endpoint = Endpoint.Objects.subscribe(objectId);
    const {data} = await this.apiClient.post<EditObjectResponse>(endpoint);
    return data;
  }

  async toggleComments(objectId: string): Promise<EditObjectResponse> {
    const endpoint = Endpoint.Objects.commentsToggle(objectId);
    const {data} = await this.apiClient.post<EditObjectResponse>(endpoint);
    return data;
  }

  async toggleVote(objectId: string): Promise<EditObjectResponse> {
    const endpoint = Endpoint.Objects.toggleVote(objectId);
    const {data} = await this.apiClient.post<EditObjectResponse>(endpoint);
    return data;
  }

  async trashObject(objectId: string): Promise<EditObjectResponse> {
    const endpoint = Endpoint.Objects.trash(objectId);
    const {data} = await this.apiClient.get<EditObjectResponse>(endpoint);
    return data;
  }

  async unsubscribe(objectId: string): Promise<EditObjectResponse> {
    const endpoint = Endpoint.Objects.unsubscribe(objectId);
    const {data} = await this.apiClient.post<EditObjectResponse>(endpoint);
    return data;
  }
}
