import {Endpoint} from '../Endpoints';
import type {Level, LevelListOptions} from '../interfaces';
/**
 * A Level is a Location – so if it is visible, you can use its ID in the Location API as well.
 */

export class LevelListAPI {
  constructor(private readonly baseURL: string) {}

  public async getDetail(id: number, options: LevelListOptions = {}): Promise<Level> {
    const endpoint = Endpoint.Level.levels(id);
    const url = new URL(endpoint, this.baseURL);
    url.search = new URLSearchParams(options as Record<string, string>).toString();
    const response = await fetch(url);
    return response.json();
  }

  public async getList(options: LevelListOptions = {}): Promise<Level[]> {
    const endpoint = Endpoint.Level.levels();
    const url = new URL(endpoint, this.baseURL);
    url.search = new URLSearchParams(options as Record<string, string>).toString();
    const response = await fetch(url);
    return response.json();
  }
}
