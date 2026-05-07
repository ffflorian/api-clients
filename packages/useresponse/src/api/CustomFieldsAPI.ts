import type {APIClient} from '@ffflorian/api-client';

import type {CustomField} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class CustomFieldsAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getObjectCustomFields(): Promise<CustomField[]> {
    const endpoint = Endpoint.CustomFields.objectCustomFields();
    const {data} = await this.apiClient.get<CustomField[]>(endpoint);
    return data;
  }

  async getUserCustomFields(): Promise<CustomField[]> {
    const endpoint = Endpoint.CustomFields.userCustomFields();
    const {data} = await this.apiClient.get<CustomField[]>(endpoint);
    return data;
  }
}
