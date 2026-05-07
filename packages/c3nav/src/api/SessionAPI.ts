import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Session, SessionKey} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class SessionAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public async getById(_id: number): Promise<Session> {
    return this.getStatus();
  }

  public async getList(): Promise<Session[]> {
    const status = await this.getStatus();
    return [status];
  }

  public async getSessionKey(): Promise<SessionKey> {
    const endpoint = Endpoint.Session.key();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getStatus(): Promise<Session> {
    const endpoint = Endpoint.Session.status();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
