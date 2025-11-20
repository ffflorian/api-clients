import {Endpoint} from '../Endpoints';
import type {ClientOptions, LocationGroupCategories} from '../interfaces/';
import {APIBase} from './APIBase';

export class LocationGroupCategoriesAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LocationGroupCategories> {
    const endpoint = Endpoint.locationGroupCategories(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve location group category with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<LocationGroupCategories[]> {
    const endpoint = Endpoint.locationGroupCategories();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve location group categories: ${response.statusText}`);
    }
    return response.json();
  }
}
