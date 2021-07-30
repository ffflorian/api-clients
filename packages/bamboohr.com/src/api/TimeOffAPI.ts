import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {OffEmployee, TimeOffPolicy, TimeOffTypes, TimeOffRequestsOptions, TimeOffRequest} from '../interfaces';

export class TimeOffAPI {
  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * This endpoint will return a list, sorted by date, of employees who will be out, and company holidays, for a period of time.
   * @see https://documentation.bamboohr.com/reference#get-a-list-of-whos-out-1
   */
  public async whosOut(start?: string, end?: string): Promise<OffEmployee[]> {
    const endpoint = Endpoint.TimeOff.whosOut();
    const {data} = await this.apiClient.get<OffEmployee[]>(endpoint, {params: {end, start}});
    return data;
  }

  /**
   * This endpoint gets a list of time off types.
   * @param mode set to 'request' to get a list of all time off types with which this user can create a time off
   * request. The default is to return the list of time off types the user has permissions on. This distinction is
   * important, as employees can request time off for types that they don't have permission to view balances and
   * requests for.
   * @see https://documentation.bamboohr.com/reference#get-time-off-types
   */
  public async timeOffTypes(mode?: 'request'): Promise<TimeOffTypes> {
    const endpoint = Endpoint.TimeOff.timeOffTypes();
    const {data} = await this.apiClient.get<TimeOffTypes>(endpoint, {params: {mode}});
    return data;
  }

  /**
   * This endpoint gets a list of time off policies.
   * @see https://documentation.bamboohr.com/reference#get-time-off-policies
   */
  public async timeOffPolicies(): Promise<TimeOffPolicy[]> {
    const endpoint = Endpoint.TimeOff.timeOffPolicies();
    const {data} = await this.apiClient.get<TimeOffPolicy[]>(endpoint);
    return data;
  }

  /**
   * The response will be limited to those employees and time off types that the owner of the API key used to make the request has view access to.
   *
   * The start and end date parameters will show time off if any day in the time off request falls within the dates specified, even if part of the time off falls outside of the time specified.
   *
   * Clients should be ready for any number of "note" elements.
   *
   * If there are zero notes for a request then the "notes" tag will be still included as an empty array.
   *
   * Newer time off requests may also include details for each day of the request in a element.
   * @see https://documentation.bamboohr.com/reference#time-off-get-time-off-requests-1
   */
  public async timeOffRequests(options: TimeOffRequestsOptions): Promise<TimeOffRequest[]> {
    const endpoint = Endpoint.TimeOff.timeOffRequests();
    const {data} = await this.apiClient.get<TimeOffRequest[]>(endpoint, {params: options});
    return data;
  }
}
