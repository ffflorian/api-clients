import {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {ClientOptions, Paginated} from '../interfaces/';
import {Reason} from '../interfaces/Reason';
import {APIBase} from './APIBase';

export class ReasonAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single reason
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#2829e308-b906-3b27-10f7-52827f34dfdd
   */
  public async retrieveReason(id: string): Promise<Reason> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons(id);
    const {data: reason} = await this.apiClient.get(endpoint);
    return reason;
  }

  /**
   * Retrieve reasons
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#cd901260-489c-7437-aaff-65c14cb8e91e
   */
  public async retrieveReasons(): Promise<Paginated<Reason[]>> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons();
    const {data: reasons} = await this.apiClient.post(endpoint, {});
    return reasons;
  }
}
