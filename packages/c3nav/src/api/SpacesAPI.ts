import {Endpoint} from '../Endpoints';
import type {Spaces} from '../interfaces/';

export class SpacesAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Spaces> {
    const endpoint = Endpoint.spaces(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Spaces[]> {
    const endpoint = Endpoint.spaces();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
