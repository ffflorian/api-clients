import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Paginated} from '../interfaces/';
import {Reason} from '../interfaces/Reason';
import {APIBase} from './APIBase';

export class ReasonAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single reason
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#2829e308-b906-3b27-10f7-52827f34dfdd
   */
  public retrieveReason(id: string): Promise<Reason> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons(id);
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * Retrieve reasons
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#cd901260-489c-7437-aaff-65c14cb8e91e
   */
  public retrieveReasons(): Promise<Paginated<Reason[]>> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons();
    return this.apiClient.requestService.post(endpoint, {});
  }
}
