import type {APIClient} from '@ffflorian/api-client';

import type {
  BanUserParams,
  BanUserResponse,
  ChangePasswordParams,
  CreateUserParams,
  EditUserParams,
  User,
  UserActionResponse,
  UsersActivityResponse,
  UsersSearchResponse,
} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class UsersAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async banUser(userId: string, params: BanUserParams): Promise<BanUserResponse> {
    const endpoint = Endpoint.Users.banUser(userId);
    const {data} = await this.apiClient.post<BanUserResponse>(endpoint, params);
    return data;
  }

  async changePassword(userId: string, params: ChangePasswordParams): Promise<UserActionResponse> {
    const endpoint = Endpoint.Users.changePassword(userId);
    const {data} = await this.apiClient.post<UserActionResponse>(endpoint, params);
    return data;
  }

  async createUser(user: CreateUserParams): Promise<UserActionResponse> {
    const endpoint = Endpoint.Users.users();
    const {data} = await this.apiClient.post<UserActionResponse>(endpoint, user);
    return data;
  }

  async deleteUser(userId: string): Promise<UserActionResponse> {
    const endpoint = Endpoint.Users.user(userId);
    const {data} = await this.apiClient.delete<UserActionResponse>(endpoint);
    return data;
  }

  async editUser(userId: string, user: EditUserParams): Promise<UserActionResponse> {
    const endpoint = Endpoint.Users.user(userId);
    const {data} = await this.apiClient.post<UserActionResponse>(endpoint, user);
    return data;
  }

  async getActivity(userId: string, options?: Record<string, unknown>): Promise<UsersActivityResponse> {
    const endpoint = Endpoint.Users.activity(userId);
    const {data} = await this.apiClient.get<UsersActivityResponse>(endpoint, {params: options});
    return data;
  }

  async getMe(): Promise<User> {
    const endpoint = Endpoint.Users.me();
    const {data} = await this.apiClient.get<User>(endpoint);
    return data;
  }

  async getUser(userId: string): Promise<User> {
    const endpoint = Endpoint.Users.user(userId);
    const {data} = await this.apiClient.get<User>(endpoint);
    return data;
  }

  async searchUsers(options?: Record<string, unknown>): Promise<UsersSearchResponse> {
    const endpoint = Endpoint.Users.searchUsers();
    const {data} = await this.apiClient.get<UsersSearchResponse>(endpoint, {params: options});
    return data;
  }

  async updateProfile(user: EditUserParams): Promise<UserActionResponse> {
    const endpoint = Endpoint.Users.updateProfile();
    const {data} = await this.apiClient.post<UserActionResponse>(endpoint, user);
    return data;
  }
}
