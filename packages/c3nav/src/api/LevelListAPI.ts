import {Endpoint} from '../Endpoints';
import type {ClientOptions, Level, LevelListOptions} from '../interfaces';
import {APIBase} from './APIBase';

/**
 * A Level is a Location – so if it is visible, you can use its ID in the Location API as well.
 */
export class LevelListAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  public async getDetail(id: number, options?: LevelListOptions): Promise<Level> {
    const endpoint = new URL(Endpoint.Level.levels(id), this.baseURL);
    if (options) {
      for (const [key, value] of Object.entries(options)) {
        endpoint.searchParams.append(key, String(value));
      }
    }
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve level with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(options?: LevelListOptions): Promise<Level[]> {
    const endpoint = new URL(Endpoint.Level.levels(), this.baseURL);
    if (options) {
      for (const [key, value] of Object.entries(options)) {
        endpoint.searchParams.append(key, String(value));
      }
    }
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve levels: ${response.statusText}`);
    }
    return response.json();
  }
}
