import {Endpoint} from '../Endpoints';
import type {Ramps} from '../interfaces/';

export class RampsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Ramps> {
    const endpoint = Endpoint.ramps(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Ramps[]> {
    const endpoint = Endpoint.ramps();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
