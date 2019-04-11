import {ClientOptions} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Authorization, NewUser, Paginated, PaginationOptions, RequestOptions, User} from '../interfaces/';
import {APIBase} from './APIBase';

export class UserAPI extends APIBase<RequestOptions> {
  constructor(config: ClientOptions<RequestOptions>, auth: Authorization) {
    super(config, auth);
  }

  /**
   * Register a new user for your company.
   * The newly created user will receive an invitation email.
   * @param userData The user data
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#5e2ae60d-7392-859d-626a-c55b8d925c8c
   */
  public invite(userData: NewUser): Promise<User> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.invite();
    return this.post(endpoint, {data: userData});
  }

  /**
   * Retrieve a user
   * @param id The user id
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#3e128ded-9395-246f-6057-6c9cc6534a35
   */
  public retrieveUser(id: string): Promise<User> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users(id);
    return this.post(endpoint, {});
  }

  /**
   * Retrieve users
   * @param options The pagination options
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#de1af2e7-9508-1492-d698-7079d93cf60a
   */
  public retrieveUsers(options?: PaginationOptions): Promise<Paginated<User[]>> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users();
    return this.post(endpoint, {data: options});
  }

  /**
   * Update an existing user
   * @param id The user id
   * @param userData The updated user data
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#9bfdfa67-5391-d0ee-04e7-20b5c1b7a04d
   */
  public updateUser(id: string, userData?: Partial<NewUser>): Promise<Paginated<User[]>> {
    this.checkApiKey('User');
    const endpoint = Endpoint.User.users(id);
    return this.post(endpoint, {data: userData});
  }
}
