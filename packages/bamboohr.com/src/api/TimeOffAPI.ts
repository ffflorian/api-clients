import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import {OffEmployee} from '../interfaces';

export class TimeOffAPI {
  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * This endpoint will return a list, sorted by date, of employees who will be out, and company holidays, for a period of time.
   * @see https://documentation.bamboohr.com/reference#get-a-list-of-whos-out-1
   */
  public async whosOut(start?: string, end?: string): Promise<OffEmployee[]> {
    const endpoint = Endpoint.TimeOff.whosOut(start, end);
    const {data: employee} = await this.apiClient.get<OffEmployee[]>(endpoint);
    return employee;
  }
}
