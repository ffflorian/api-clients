import {Endpoint} from '../Endpoints';
import type {Stairs} from '../interfaces/';

export class StairsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Stairs> {
    const endpoint = Endpoint.stairs(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Stairs[]> {
    const endpoint = Endpoint.stairs();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
