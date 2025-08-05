import {Endpoint} from '../Endpoints';
import type {LocationGroupCategories} from '../interfaces/';

export class LocationGroupCategoriesAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<LocationGroupCategories> {
    const endpoint = Endpoint.locationGroupCategories(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<LocationGroupCategories[]> {
    const endpoint = Endpoint.locationGroupCategories();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
