import {Endpoint} from '../Endpoints';
import type {Buildings} from '../interfaces/';

export class BuildingsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Buildings> {
    const endpoint = Endpoint.buildings(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Buildings[]> {
    const endpoint = Endpoint.buildings();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
