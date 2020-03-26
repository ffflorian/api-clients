import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {ClientOptions, Editor} from '../interfaces/';
import {APIBase} from './APIBase';

export class EditorAPI extends APIBase {
  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    super(apiClient, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Editor> {
    const endpoint = Endpoint.editor(id);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getList(): Promise<Editor[]> {
    const endpoint = Endpoint.editor();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
