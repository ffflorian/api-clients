import {Endpoint} from '../Endpoints';
import type {Obstacles} from '../interfaces/';

export class ObstaclesAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Obstacles> {
    const endpoint = Endpoint.obstacles(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Obstacles[]> {
    const endpoint = Endpoint.obstacles();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }
}
