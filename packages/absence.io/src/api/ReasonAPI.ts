
import {Endpoint} from '../Endpoints';
import type {ClientOptions, Paginated} from '../interfaces/';
import type {Reason} from '../interfaces/Reason';
import {APIBase} from './APIBase';

export class ReasonAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * Retrieve a single reason
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#2829e308-b906-3b27-10f7-52827f34dfdd
   */
  public async retrieveReason(id: string): Promise<Reason> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve reason with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Retrieve reasons
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#cd901260-489c-7437-aaff-65c14cb8e91e
   */
  public async retrieveReasons(): Promise<Paginated<Reason[]>> {
    this.checkApiKey('Reason');
    const endpoint = Endpoint.Reason.reasons();
    const response = await fetch(endpoint, {method: 'POST'});
    if (!response.ok) {
      throw new Error(`Failed to retrieve reasons: ${response.statusText}`);
    }
    return response.json();
  }
}
