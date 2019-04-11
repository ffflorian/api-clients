import {ClientOptions} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Authorization, Paginated, PaginationOptions, RequestOptions, Team} from '../interfaces/';
import {APIBase} from './APIBase';

export class TeamAPI extends APIBase<RequestOptions> {
  constructor(config: ClientOptions<RequestOptions>, auth: Authorization) {
    super(config, auth);
  }

  /**
   * Retrieve a single team
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#08486bf6-c138-5808-7c1d-7ead5c8b1aee
   */
  public retrieveTeam(id: string): Promise<Team> {
    this.checkApiKey('Team');
    const endpoint = Endpoint.Team.teams(id);
    return this.get(endpoint);
  }

  /**
   * Retrieve teams
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#ec24e740-47e6-3daa-5698-040f99ac9dfd
   */
  public retrieveTeams(options?: PaginationOptions): Promise<Paginated<Team[]>> {
    this.checkApiKey('Team');
    const endpoint = Endpoint.Team.teams();
    return this.post(endpoint, {data: options});
  }
}
