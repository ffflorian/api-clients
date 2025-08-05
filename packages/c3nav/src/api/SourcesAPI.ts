import {Endpoint} from '../Endpoints';
import type {Sources} from '../interfaces/';

export class SourcesAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Sources> {
    const endpoint = Endpoint.sources(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Sources[]> {
    const endpoint = Endpoint.sources();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
