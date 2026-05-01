import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Paginated, PaginationOptions} from '../interfaces/';
import type {Reason} from '../interfaces/Reason';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class ReasonAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * Retrieve a single reason
   */
  public async retrieveReason(id: string): Promise<Reason> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons(id);
    const {data: reason} = await this.apiClient.get(endpoint);
    return reason;
  }

  /**
   * Retrieve reasons
   */
  public async retrieveReasons(options?: PaginationOptions): Promise<Paginated<Reason[]>> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons();
    const {data: reasons} = await this.apiClient.post(endpoint, options);
    return reasons;
  }
}
