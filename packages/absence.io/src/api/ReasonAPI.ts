import {ClientOptions} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Authorization, Paginated, RequestOptions} from '../interfaces/';
import {Reason} from '../interfaces/Reason';
import {APIBase} from './APIBase';

export class ReasonAPI extends APIBase<RequestOptions> {
  constructor(config: ClientOptions<RequestOptions>, auth: Authorization) {
    super(config, auth);
  }

  /**
   * Retrieve a single reason
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#2829e308-b906-3b27-10f7-52827f34dfdd
   */
  public retrieveReason(id: string): Promise<Reason> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons(id);
    return this.get(endpoint);
  }

  /**
   * Retrieve reasons
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#cd901260-489c-7437-aaff-65c14cb8e91e
   */
  public retrieveReasons(): Promise<Paginated<Reason[]>> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons();
    return this.post(endpoint, {});
  }
}
