
import {Endpoint} from '../Endpoints';
import type {ClientOptions, Paginated, PaginationOptions, Team} from '../interfaces/';
import {APIBase} from './APIBase';

export class TeamAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * Retrieve a single team
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#08486bf6-c138-5808-7c1d-7ead5c8b1aee
   */
  public async retrieveTeam(id: string): Promise<Team> {
    this.checkApiKey('Team');
    const endpoint = Endpoint.Team.teams(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve team with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve teams
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#ec24e740-47e6-3daa-5698-040f99ac9dfd
   */
  public async retrieveTeams(options?: PaginationOptions): Promise<Paginated<Team[]>> {
    this.checkApiKey('Team');
    const endpoint = Endpoint.Team.teams();
    const response = await fetch(endpoint, {body: JSON.stringify(options), method: 'POST'});
    if (!response.ok) {
      throw new Error(`Failed to retrieve teams: ${response.statusText}`);
    }
    return response.json();
  }
}
