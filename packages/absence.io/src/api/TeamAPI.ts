import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class TeamAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.requestService.setApiUrl(newUrl);
  }

  /**
   * Retrieve a single team
   */
  public retrieveTeam(id: string): Promise<any> {
    this.checkApiKey('Team');
    const endpoint = Endpoint.Team.teams(id);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Retrieve teams
   */
  public retrieveTeams(): Promise<any> {
    this.checkApiKey('Team');
    const endpoint = Endpoint.Team.teams();
    return this.apiClient.requestService.post(endpoint);
  }
}
