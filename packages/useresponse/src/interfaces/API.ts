import {
  AdditionalAPI,
  AuthAPI,
  CategoriesAPI,
  ChangelogAPI,
  ChatsAPI,
  CommentsAPI,
  CustomFieldsAPI,
  ModerationAPI,
  ObjectsAPI,
  ReportsAPI,
  UserNotesAPI,
  UsersAPI,
} from '../api/';

export interface API {
  additional: AdditionalAPI;
  auth: AuthAPI;
  categories: CategoriesAPI;
  changelog: ChangelogAPI;
  chats: ChatsAPI;
  comments: CommentsAPI;
  customFields: CustomFieldsAPI;
  moderation: ModerationAPI;
  objects: ObjectsAPI;
  reports: ReportsAPI;
  userNotes: UserNotesAPI;
  users: UsersAPI;
}
