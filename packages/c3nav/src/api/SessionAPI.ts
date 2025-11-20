import {Endpoint} from '../Endpoints';
import type {ClientOptions, Session} from '../interfaces/';
import {APIBase} from './APIBase';

export class SessionAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Session> {
    const endpoint = Endpoint.session(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve session with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Session[]> {
    const endpoint = Endpoint.session();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve sessions: ${response.statusText}`);
    }
    return response.json();
  }
}
