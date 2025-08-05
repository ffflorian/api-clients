import {Endpoint} from '../Endpoints';
import type {Columns} from '../interfaces/';

export class ColumnsAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Columns> {
    const endpoint = Endpoint.columns(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Columns[]> {
    const endpoint = Endpoint.columns();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
