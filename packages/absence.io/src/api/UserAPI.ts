import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ClientOptions, NewUser, Paginated, PaginationOptions, User} from '../interfaces/';
import {APIBase} from './APIBase';

export class UserAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Register a new user for your company.
   * The newly created user will receive an invitation email.
   * @param userData The user data
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#5e2ae60d-7392-859d-626a-c55b8d925c8c
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
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#3e128ded-9395-246f-6057-6c9cc6534a35
   */
  public async retrieveUser(id: string): Promise<User> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users(id);
    const {data: user} = await this.apiClient.get(endpoint, {});
    return user;
  }

  /**
   * Retrieve users
   * @param options The pagination options
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#de1af2e7-9508-1492-d698-7079d93cf60a
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
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#9bfdfa67-5391-d0ee-04e7-20b5c1b7a04d
   */
  public async updateUser(id: string, userData?: Partial<NewUser>): Promise<Paginated<User[]>> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users(id);
    const {data: users} = await this.apiClient.post(endpoint, userData);
    return users;
  }
}
