import {Endpoint} from '../Endpoints';
import type {Updates} from '../interfaces/';

export class UpdatesAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Updates> {
    const endpoint = Endpoint.updates(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Updates[]> {
    const endpoint = Endpoint.updates();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
