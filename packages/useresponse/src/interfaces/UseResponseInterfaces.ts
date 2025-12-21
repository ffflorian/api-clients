interface AttachmentName {
  ext?: string;
  full?: string;
  short?: string;
}

export interface Attachment {
  directUrl?: string;
  icon?: string;
  id?: number;
  name?: AttachmentName;
  url?: string;
}

export interface BanUserParams {
  /**
   * @description Duration of the ban in days (ignored if permanent)
   * @example 30
   */
  ban_duration_days?: number;
  /**
   * @description Reason for banning the user
   * @example Fraudulent activity detected
   */
  ban_reason?: string;
  /**
   * @description Whether to delete user's related objects (tickets, comments, etc.)
   * @example true
   */
  delete_related_objects?: boolean;
  /**
   * @description If true, the ban is permanent
   * @example false
   */
  permanent?: boolean;
}

export interface BanUserResponse {
  success?: User;
}

export interface Category {
  description?: unknown;
  forum?: Forum;
  id?: number;
  image?: {
    big?: string;
    medium?: string;
    small?: string;
  };
  isPrivate?: boolean;
  name?: string;
  order?: number;
  ownership?: unknown;
  parent_id?: number;
  slug?: string;
  type?: unknown;
}

export interface LoginData {
  password: string;
  username: string;
}

export interface ChangePasswordParams {
  /**
   * @description New valid “email” value
   * @example securestring12345
   */
  password: string;
}

export interface ChangelogAction {
  change_id?: string;
  field?: string;
  previous?: string;
  value?: string;
}

export interface Chat {
  author?: User;
  completedAt?: string;
  completedAtPosix?: number;
  createdAt?: string;
  createdAtPosix?: number;
  externalId?: number;
  id?: number;
  lastMessage?: Message;
  responsible?: User;
  score?: number;
  seenByClient?: boolean;
  source?: string;
  title?: string;
  token?: string;
  updatedAt?: string;
  updatedAtPosix?: number;
}

export interface ChatMessagesPaginator {
  success?: ChatMessagesPaginator;
}

export interface ChatsPaginator {
  currentPage?: number;
  data?: Chat[];
  firstPage?: number;
  lastPage?: number;
  nextPage?: number;
  objectsPerPage?: number;
  totalObjects?: number;
  totalPages?: number;
}

export interface ChatsResponse {
  success?: ChatsPaginator;
}

export interface Comment {
  attachments?: Attachment[];
  author?: User;
  content?: string;
  createdAgo?: string;
  createdAt?: string;
  createdAtPosix?: number;
  id?: number;
  is_best?: number;
  objectId?: number;
  ownership?: string;
  replyToId?: number;
  updatedAt?: string;
  votes?: Vote;
}

export interface CommentAddParams {
  /**
   * @description The content of a new object.
   *     Supports BBcode, but HTML tags are not allowed
   *     ##### Max content length: 12000 chars
   * @example My first comment
   */
  content: string;
  /**
   * @description If 1 specified, comment will be saved as private note. To add private note you should have agent’s or admin’s privileges
   *     ##### Valid values: 0, 1
   * @example 0
   */
  is_private?: number;
  /**
   * @description Valid object(ticket/topic) id
   * @example 38
   */
  object_id?: number;
  /**
   * @description Valid comment id to make reply to comment
   * @example 10
   */
  reply_to?: number;
  /**
   * @description API would accept “content” parameter in HTML format. Overrides “Accept HTML Content” global setting for one request
   *     ##### Valid values: 0, 1
   * @example 0
   */
  treat_as_html?: number;
}

export interface CommentEditParams {
  /**
   * @description The content of a new object.
   *     Supports BBcode, but HTML tags are not allowed
   *     ##### Max content length: 12000 chars
   * @example My first comment
   */
  content?: string;
  /**
   * @description API would accept “content” parameter in HTML format. Overrides “Accept HTML Content” global setting for one request
   *     ##### Valid values: 0, 1
   * @example 0
   */
  treat_as_html?: number;
}

export interface CommentModerateResponse {
  success?: Comment;
}

export interface CreateUserParams {
  /**
   * @description New valid “email” value
   * @example test@test.com
   */
  email: string;
  /**
   * @description Not empty string containing user’s name
   * @example John Edwards
   */
  full_name: string;
  /**
   * @description User’s password
   * @example securestring12345
   */
  password?: string;
  /**
   * @description Specify the name for the custom field
   * @example Support
   */
  property_1?: string;
  tags?: string;
  /**
   * @description Valid team numeric identifier
   * @example 1
   */
  team_id?: number;
}

export interface CustomField {
  description?: unknown;
  field_type?: string;
  id?: number;
  is_active?: number;
  is_private?: number;
  is_required?: number;
  label?: string;
  module?: string;
  name?: string;
  options?: Record<string, never>;
  type?: string;
}

export interface CustomFieldValue {
  id?: number;
  label?: string;
  name?: string;
  textValue?: unknown[];
  value?: unknown[];
}

export interface DeclineParams {
  /**
   * @description In case a comment or topic is declined you can specify decline reason
   * @example Too little information provided
   */
  reason?: string;
}

export interface EditUserParams {
  /**
   * @description New valid “email” value.
   * @example test@test.com
   */
  email?: string;
  /**
   * @description Not empty string containing user’s name.
   * @example John Edwards
   */
  full_name?: string;
  /**
   * @description User phone number.
   * @example +447777444445
   */
  phone?: string;
  /**
   * @description Specify the name for the custom field
   * @example Support
   */
  property_1?: string;
  tags?: string;
  /**
   * @description Valid team numeric identifier
   * @example 1
   */
  team_id?: number;
}

export interface Forum {
  id?: string;
  name?: string;
}

export interface GetChatResponse {
  success?: Chat;
}

export interface LoginParams {
  /** @example support@useresponse.com */
  email: string;
  /** @example 123456 */
  password: string;
}

export interface ManageUserNoteParams {
  /**
   * @description The content of a new comment.
   *     Supports BBcode, but HTML tags are not allowed
   *     ##### Max content length: 12000 chars
   * @example My first note
   */
  content: string;
  /**
   * @description Not empty string containing user’s name
   * @example 2017-10-13 18:29:00
   */
  remind_at?: string;
}

export interface Message {
  author?: User;
  content?: string;
  createdAtPosix?: number;
  fileName?: string;
  id?: number;
  isSystem?: boolean;
  parentId?: number;
  token?: string;
  type?: string;
}

interface Link {
  object_id?: string;
  title?: string;
  type?: string;
  url?: string;
}

interface Team {
  id?: number;
  name?: string;
}

interface Votes {
  all?: number;
  canVote?: boolean;
  isVoted?: boolean;
  negative?: number;
  plural?: string;
  positive?: number;
}

export interface Object {
  attachments?: Attachment[];
  author?: User;
  bestComment?: Comment;
  canBeCommented?: boolean;
  category?: Category;
  commentedAt?: string;
  commentsNum?: number;
  completedBy?: User;
  completedOn?: string;
  content?: string;
  createdAt?: string;
  createdAtPosix?: number;
  custom_fields?: CustomFieldValue[];
  forum?: Forum;
  id?: number;
  isAbused?: boolean;
  isFeatured?: boolean;
  isPrivate?: boolean;
  isSubscribed?: number;
  language?: string;
  latestActivityPosix?: number;
  links?: Link[];
  ownership?: string;
  parentObject?: unknown;
  recipients?: string[];
  responsible?: User;
  score?: number;
  scoreComment?: string;
  scoreReason?: string;
  slaDatePosix?: number;
  slug?: string;
  source?: Source;
  state?: State;
  status?: Status;
  tags?: string[];
  team?: Team;
  title?: string;
  type?: ObjectType;
  url?: string;
  views?: number;
  votes?: Votes;
}

interface NewAttachment {
  /**
   * @description Should be in base64 format
   * @example iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA.....==
   */
  body?: string;
  /** @example call.png */
  name?: string;
}

export interface ObjectAddParams {
  /** @description Array of attachments */
  attachments?: NewAttachment[];
  /**
   * @description Valid category id to assign new object to
   *     Value 0 means no category
   * @example 0
   */
  category_id?: number;
  /**
   * @description The content of a new object.
   *     Supports BBcode, but HTML tags are not allowed
   *     ##### Max content length: 12000 chars
   *     ##### Required for feedback, announcements
   * @example Here is the sense of my problem
   */
  content?: string;
  /**
   * @description Allows to use object expiration date
   *     Value never means that announcement has no expiration date
   *     ##### Valid only for announcements. Valid values: never, on_date
   * @example never
   */
  expire_select?: string;
  /**
   * @description Valid only for announcements and date should be in format dd.mm.yyyy
   *     ##### required when expire_select parameter value is set to on_date
   * @example 15.06.2020
   */
  expires_at?: string;
  /**
   * @description Allows to set object author manually
   *     Requires appropriate privilege
   *     Valid user id or any email address
   * @example support@useresponse.com
   */
  force_author?: string;
  /**
   * @description Allows to define object privacy
   *     ##### Only for feedback and announcements
   *     ##### Valid values: 0, 1
   * @example 0
   */
  is_private?: number;
  /**
   * @description Valid object type
   * @example ticket
   * @enum {string}
   */
  object_type: 'ticket' | 'idea' | 'problem' | 'question';
  /**
   * @description Object belongs to a logical group
   * @example helpdesk
   * @enum {string}
   */
  ownership: 'feedback' | 'helpdesk';
  /**
   * @description Specify the name for the custom field
   * @example Support
   */
  property_1?: string;
  /**
   * @description Valid agent or administrator user id
   *     Value 0 means nobody
   * @example 10
   */
  responsible_id?: number;
  /** @description Array of tags */
  tags?: string[];
  /**
   * @description Valid team numeric identifier
   * @example 5
   */
  team_id?: number;
  /**
   * @description The title of a new object
   *     ##### Max title length: 100 chars
   * @example My first helpdesk record
   */
  title: string;
}

export interface ObjectEditParams {
  /** @description Array of attachments */
  attachments?: NewAttachment[];
  /**
   * @description Valid category id to assign new object to
   *     Value 0 means no category
   * @example 0
   */
  category_id?: number;
  /**
   * @description The content of a new object.
   *     Supports BBcode, but HTML tags are not allowed
   *     ##### Max content length: 12000 chars
   *     ##### Required for feedback, announcements
   * @example Here is the sense of my problem
   */
  content?: string;
  /**
   * @description Allows to use object expiration date
   *     Value never means that announcement has no expiration date
   *     ##### Valid only for announcements. Valid values: never, on_date
   * @example never
   */
  expire_select?: string;
  /**
   * @description Valid only for announcements and date should be in format dd.mm.yyyy
   *     ##### required when expire_select parameter value is set to on_date
   * @example 15.06.2020
   */
  expires_at?: string;
  /**
   * @description Allows to set object author manually
   *     Requires appropriate privilege
   *     Valid user id or any email address
   * @example support@useresponse.com
   */
  force_author?: string;
  /**
   * @description Allows to define object privacy
   *     ##### Only for feedback and announcements
   *     ##### Valid values: 0, 1
   * @example 0
   */
  is_private?: number;
  /**
   * @description Valid object type
   * @example ticket
   */
  object_type?: string;
  /**
   * @description Specify the name for the custom field
   * @example Support
   */
  property_1?: string;
  /**
   * @description Valid agent or administrator user id
   *     Value 0 means nobody
   * @example 10
   */
  responsible_id?: number;
  /**
   * @description Valid status id. Id can be taken from statuses.json
   * @example 1
   */
  status_id?: number;
  /** @description Array of tags */
  tags?: string[];
  /**
   * @description Valid team numeric identifier
   * @example 5
   */
  team_id?: number;
  /**
   * @description The title of a new object
   *     ##### Max title length: 100 chars
   * @example My first helpdesk record
   */
  title?: string;
}

export interface ObjectType {
  icon?: {
    big?: string;
    small?: string;
  };
  order?: number;
  slug?: string;
  supports?: {
    comments?: boolean;
    negativeVote?: boolean;
    votes?: boolean;
  };
  title?: {
    plural?: string;
    single?: string;
  };
}

export interface Paginator {
  currentPage?: number;
  data?: Object[];
  firstPage?: number;
  lastPage?: number;
  nextPage?: number;
  objectsPerPage?: number;
  totalObjects?: number;
  totalPages?: number;
}

export interface Report {
  /** @default 4 */
  id: number;
  /** @default Inbox */
  name: string;
}

export interface ReportPaginator {
  activeGroup?: string;
  currentPage?: number;
  data?: Object[];
  firstPage?: number;
  groups?: ReportGroup[];
  lastPage?: number;
  nextPage?: number;
  objectsPerPage?: number;
  totalObjects?: number;
  totalPages?: number;
}

export interface SearchResponse {
  success?: Paginator;
}

export interface Source {
  identifier?: string;
  name?: string;
}

export interface State {
  identifier?: number;
  name?: string;
}

export interface Status {
  color?: {
    background?: string;
    text?: string;
  };
  id?: number;
  isClosed?: boolean;
  isDefault?: boolean;
  isSystem?: boolean;
  order?: number;
  ownership?: string;
  slug?: string;
  title?: string;
  type?: string;
}

export interface TopicModerateResponse {
  success?: Object;
}

export interface Avatar {
  big?: string;
  medium?: string;
  small?: string;
  tiny?: string;
}

export interface User {
  apiKey?: string;
  avatar?: Avatar;
  custom_fields?: CustomFieldValue[];
  gravatarEmail?: unknown;
  id?: number;
  isDefaultAvatar?: boolean;
  lastVisitAt?: string;
  name?: string;
  profileUrl?: string;
  registrationDate?: string;
  role?: {
    alias?: string;
    id?: number;
  };
  shortName?: string;
  tags?: string;
  team?: {
    id?: number;
    name?: string;
  };
}

export interface UserNote {
  author?: User;
  content?: string;
  createdAgo?: string;
  createdAt?: string;
  createdAtPosix?: number;
  id?: number;
  updatedAt?: string;
}

export interface UsersActivityResponse {
  currentPage?: number;
  data?: Object[];
  firstPage?: number;
  lastPage?: number;
  nextPage?: number;
  objectsPerPage?: number;
  totalObjects?: number;
  totalPages?: number;
}

export interface UsersSearchResponse {
  currentPage?: number;
  data?: User[];
  firstPage?: number;
  lastPage?: number;
  nextPage?: number;
  objectsPerPage?: number;
  totalObjects?: number;
  totalPages?: number;
}

export interface Vote {
  amount?: number;
  canVote?: boolean;
  isVoted?: boolean;
  plural?: string;
}

export interface CommentActionResponse {
  success?: Comment;
}

export interface CommentsListResponse {
  success?: Comment[];
}

export interface CreateObjectResponse {
  success?: Object;
}

export interface EditObjectResponse {
  success?: Object;
}

export interface ErrorInvalidParamsResponse {
  error?: {
    /** @default 400 */
    code: number;
    /** @default ownership or/and object_type parameters are missed */
    context: string;
    /** @default Invalid request and/or request parameters */
    message: string;
  };
}

export interface ErrorNotFoundResponse {
  error?: {
    /** @default 404 */
    code: number;
    /** @default Resource is not found */
    message: string;
  };
}

export interface ErrorUnauthorizedResponse {
  error?: {
    /** @default 401 */
    code: number;
    /** @default Authentication is required */
    message: string;
  };
}

export interface ReportGroup {
  count?: number;
  id?: string;
  name?: string;
}

export interface UserActionResponse {
  success?: User;
}

export interface UserNotesResponse {
  success?: UserNote[];
}
