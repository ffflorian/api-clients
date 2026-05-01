import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, NewUser, Paginated, PaginationOptions, User} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class UserAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Deletes a user
   * @param id The user id
   */
  public async deleteUser(id: string): Promise<void> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users(id);
    await this.apiClient.delete(endpoint);
  }

  /**
   * Register a new user for your company.
   * The newly created user will receive an invitation email.
   * @param userData The user data
   */
  public async invite(userData: NewUser): Promise<User> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.invite();
    const {data: user} = await this.apiClient.post(endpoint, userData);
    return user;
  }

  /**
   * Retrieve a user
   * @param id The user id
   */
  public async retrieveUser(id: string): Promise<User> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users(id);
    const {data: user} = await this.apiClient.get(endpoint);
    return user;
  }

  /**
   * Retrieve a user by several options: e.g his lastname, or his firstname, or both
   * e.g.
   *  const options = {
   *      skip: 0,
   *      limit: 50,
   *      filter: {
   *          firstName,
   *          lastName,
   *      }
   *  }
   * @param {PaginationOptions} [options] The pagination options
   * @returns {Promise<User>}
   */
  public async retrieveUserByOption(options?: PaginationOptions): Promise<Paginated<User[]>> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users();
    const {data: users} = await this.apiClient.post(endpoint, options);
    return users;
  }

  /**
   * Retrieve users
   * @param options The pagination options
   */
  public async retrieveUsers(options?: PaginationOptions): Promise<Paginated<User[]>> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users();
    const {data: users} = await this.apiClient.post(endpoint, options);
    return users;
  }

  /**
   * Update an existing user
   * @param id The user id
   * @param userData The updated user data
   */
  public async updateUser(id: string, userData?: Partial<NewUser>): Promise<User> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users(id);
    const {data: user} = await this.apiClient.put(endpoint, userData);
    return user;
  }
}
