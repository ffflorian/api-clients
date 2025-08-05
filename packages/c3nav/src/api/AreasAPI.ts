import {Endpoint} from '../Endpoints';
import type {Areas} from '../interfaces/';

export class AreasAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Areas> {
    const endpoint = Endpoint.areas(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Areas[]> {
    const endpoint = Endpoint.areas();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
