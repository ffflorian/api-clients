import type {APIClient} from '@ffflorian/api-client';
import type {Category} from '../interfaces';

import {Endpoint} from '../Endpoints';

interface GetListOptions {
  ownership?: string;
  type?: string;
}

export class CategoriesAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getCategory(categoryId: string): Promise<Category> {
    const endpoint = Endpoint.Categories.categoryById(categoryId);
    const {data} = await this.apiClient.get<Category>(endpoint);
    return data;
  }

  async getList(options: GetListOptions): Promise<Category[]> {
    const endpoint = Endpoint.Categories.listOfCategories();
    const {data} = await this.apiClient.get<Category[]>(endpoint, {params: options});
    return data;
  }
}
