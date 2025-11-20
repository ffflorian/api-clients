import {Endpoint} from '../Endpoints';
import type {ClientOptions, Columns} from '../interfaces/';
import {APIBase} from './APIBase';

export class ColumnsAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Columns> {
    const endpoint = Endpoint.columns(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve column with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Columns[]> {
    const endpoint = Endpoint.columns();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve columns: ${response.statusText}`);
    }
    return response.json();
  }
}
