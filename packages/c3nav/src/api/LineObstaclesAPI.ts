import {Endpoint} from '../Endpoints';
import type {ClientOptions, LineObstacles} from '../interfaces/';
import {APIBase} from './APIBase';

export class LineObstaclesAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LineObstacles> {
    const endpoint = Endpoint.lineObstacles(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve line obstacle with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<LineObstacles[]> {
    const endpoint = Endpoint.lineObstacles();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve line obstacles: ${response.statusText}`);
    }
    return response.json();
  }
}
