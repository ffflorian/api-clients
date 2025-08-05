import {Endpoint} from '../Endpoints';
import type {Session} from '../interfaces/';

export class SessionAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Session> {
    const endpoint = Endpoint.session(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Session[]> {
    const endpoint = Endpoint.session();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
