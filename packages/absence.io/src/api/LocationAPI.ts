import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class LocationAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single location
   */
  public retrieveLocation(id: string): Promise<any> {
    this.checkApiKey('Location');
    const endpoint = Endpoint.Location.locations(id);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Retrieve locations
   */
  public retrieveLocations(): Promise<any> {
    this.checkApiKey('Location');
    const endpoint = Endpoint.Location.locations();
    return this.apiClient.requestService.post(endpoint, {});
  }
}
