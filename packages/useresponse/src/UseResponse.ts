import {APIClient} from '@ffflorian/api-client';

import {
  AuthAPI,
  CategoriesAPI,
  ChangelogAPI,
  ChatsAPI,
  ModerationAPI,
  CommentsAPI,
  AdditionalAPI,
  UsersAPI,
  ObjectsAPI,
  CustomFieldsAPI,
  ReportsAPI,
  UserNotesAPI,
} from './api';
import type {API, ClientOptions} from './interfaces';

export class UseResponse {
  public readonly api: API;
  private readonly apiClient: APIClient;

  constructor(options: ClientOptions) {
    this.apiClient = new APIClient(options.apiUrl || 'https://api.useresponse.com/api/7.0');

    this.api = {
      additional: new AdditionalAPI(this.apiClient),
      auth: new AuthAPI(this.apiClient),
      categories: new CategoriesAPI(this.apiClient),
      changelog: new ChangelogAPI(this.apiClient),
      chats: new ChatsAPI(this.apiClient),
      comments: new CommentsAPI(this.apiClient),
      customFields: new CustomFieldsAPI(this.apiClient),
      moderation: new ModerationAPI(this.apiClient),
      objects: new ObjectsAPI(this.apiClient),
      reports: new ReportsAPI(this.apiClient),
      userNotes: new UserNotesAPI(this.apiClient),
      users: new UsersAPI(this.apiClient),
    };
  }

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
    this.api.additional = new AdditionalAPI(this.apiClient);
    this.api.auth = new AuthAPI(this.apiClient);
    this.api.categories = new CategoriesAPI(this.apiClient);
    this.api.changelog = new ChangelogAPI(this.apiClient);
    this.api.chats = new ChatsAPI(this.apiClient);
    this.api.comments = new CommentsAPI(this.apiClient);
    this.api.customFields = new CustomFieldsAPI(this.apiClient);
    this.api.moderation = new ModerationAPI(this.apiClient);
    this.api.objects = new ObjectsAPI(this.apiClient);
    this.api.reports = new ReportsAPI(this.apiClient);
    this.api.userNotes = new UserNotesAPI(this.apiClient);
    this.api.users = new UsersAPI(this.apiClient);
  }
}
