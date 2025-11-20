import {Endpoint} from '../Endpoints';
import type {ClientOptions, Editor} from '../interfaces/';
import {APIBase} from './APIBase';

export class EditorAPI extends APIBase {
  constructor(baseURL: string, options: ClientOptions) {
    super(baseURL, options);
  }

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Editor> {
    const endpoint = Endpoint.editor(id);
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve editor with ID ${id}: ${response.statusText}`);
    }
    return response.json();
  }

  public async getList(): Promise<Editor[]> {
    const endpoint = Endpoint.editor();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve editors: ${response.statusText}`);
    }
    return response.json();
  }
}
