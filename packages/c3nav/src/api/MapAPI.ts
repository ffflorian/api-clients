import {Endpoint} from '../Endpoints';
import type {Bounds} from '../interfaces/';

export class MapAPI {
  constructor(private readonly baseURL: string) {}

  /** /bounds/ returns the maximum bounds of the map */
  public async getBounds(): Promise<Bounds> {
    const endpoint = Endpoint.Map.bounds();
    const response = await fetch(new URL(endpoint, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }
}
