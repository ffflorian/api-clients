import {Endpoint} from '../Endpoints';
import type {ClientOptions, Obstacles} from '../interfaces/';
import {APIBase} from './APIBase';

export class ObstaclesAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Obstacles> {
    const endpoint = Endpoint.obstacles(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve obstacle with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Obstacles[]> {
    const endpoint = Endpoint.obstacles();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve obstacles: ${response.statusText}`);
    }
    return response.json();
  }
}
