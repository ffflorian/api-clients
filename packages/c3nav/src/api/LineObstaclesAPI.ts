import {Endpoint} from '../Endpoints';
import type {LineObstacles} from '../interfaces/';

export class LineObstaclesAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LineObstacles> {
    const endpoint = Endpoint.lineObstacles(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<LineObstacles[]> {
    const endpoint = Endpoint.lineObstacles();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
