import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Paginated, PaginationOptions, Team} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class TeamAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Deletes a team
   * @param id The team id
   */
  public async deleteTeam(id: string): Promise<void> {
    this.checkApiKey('Team');
    const endpoint = Endpoint.Team.teams(id);
    await this.apiClient.delete(endpoint);
  }

  /**
   * Retrieve a single team
   */
  public async retrieveTeam(id: string): Promise<Team> {
    this.checkApiKey('Team');
    const endpoint = Endpoint.Team.teams(id);
    const {data: team} = await this.apiClient.get(endpoint);
    return team;
  }

  /**
   * Retrieve teams
   */
  public async retrieveTeams(options?: PaginationOptions): Promise<Paginated<Team[]>> {
    this.checkApiKey('Team');
    const endpoint = Endpoint.Team.teams();
    const {data: teams} = await this.apiClient.post(endpoint, options);
    return teams;
  }
}
