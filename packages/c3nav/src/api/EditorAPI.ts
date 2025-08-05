import {Endpoint} from '../Endpoints';
import type {Editor} from '../interfaces/';

export class EditorAPI {
  constructor(private readonly baseURL: string) {}

  /**
   * @param id The id to get
   */
  public async getById(id: number): Promise<Editor> {
    const endpoint = Endpoint.editor(id);
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }

  public async getList(): Promise<Editor[]> {
    const endpoint = Endpoint.editor();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
