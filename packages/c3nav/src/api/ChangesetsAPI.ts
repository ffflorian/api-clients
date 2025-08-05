import {Endpoint} from '../Endpoints';
import type {Changesets} from '../interfaces/';

export class ChangesetsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Changesets> {
    const endpoint = Endpoint.changesets(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Changesets[]> {
    const endpoint = Endpoint.changesets();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }
}
