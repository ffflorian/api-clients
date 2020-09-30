import {
  BroadcastService,
  ConversationService,
  LoginService,
  MessagesService,
  RegisterService,
  ServiceService,
  UsersService,
} from '../api';

export interface API {
  broadcastService: BroadcastService;
  conversationService: ConversationService;
  loginService: LoginService;
  messagesService: MessagesService;
  registerService: RegisterService;
  serviceService: ServiceService;
  usersService: UsersService;
}
