import type {APIClient} from '@ffflorian/api-client';

import type {ManageUserNoteParams, UserNotesResponse} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class UserNotesAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async add(userId: string, note: ManageUserNoteParams): Promise<UserNotesResponse> {
    const endpoint = Endpoint.UserNotes.add(userId);
    const {data} = await this.apiClient.post<UserNotesResponse>(endpoint, note);
    return data;
  }

  async delete(noteId: string): Promise<UserNotesResponse> {
    const endpoint = Endpoint.UserNotes.delete(noteId);
    const {data} = await this.apiClient.post<UserNotesResponse>(endpoint);
    return data;
  }

  async edit(noteId: string, note: ManageUserNoteParams): Promise<UserNotesResponse> {
    const endpoint = Endpoint.UserNotes.edit(noteId);
    const {data} = await this.apiClient.post<UserNotesResponse>(endpoint, note);
    return data;
  }

  async getNotes(userId: string): Promise<UserNotesResponse> {
    const endpoint = Endpoint.UserNotes.notes(userId);
    const {data} = await this.apiClient.get<UserNotesResponse>(endpoint);
    return data;
  }
}
