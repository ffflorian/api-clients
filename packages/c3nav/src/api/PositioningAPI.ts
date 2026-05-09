import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, PositioningLocateRequest, PositioningLocateResponse} from '../interfaces';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class PositioningAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public async locate(payload: PositioningLocateRequest): Promise<PositioningLocateResponse> {
    const endpoint = Endpoint.Positioning.locate();
    const {data} = await this.apiClient.post(endpoint, payload);
    return data;
  }

  public async locateTest(): Promise<PositioningLocateResponse> {
    const endpoint = Endpoint.Positioning.locateTest();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
