import {Endpoint} from '../Endpoints';
import type {POIs} from '../interfaces';

export class PoisAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<POIs> {
    const endpoint = Endpoint.pois(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<POIs[]> {
    const endpoint = Endpoint.pois();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
