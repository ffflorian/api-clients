import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class ReasonAPI extends APIBase {
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
   * Retrieve a single reason
   */
  public retrieveReason(id: string): Promise<any> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons(id);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Retrieve reasons
   */
  public retrieveLocations(): Promise<any> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons();
    return this.apiClient.requestService.post(endpoint);
  }
}
