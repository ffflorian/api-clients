import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../Endpoints';
import {ClientOptions, Editor} from '../interfaces/';
import {APIBase} from './APIBase';

export class EditorAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public getList(): Promise<Editor[]> {
    const endpoint = Endpoint.editor();
    return this.apiClient.requestService.get(endpoint);
  }

  /**
   * @param id The id to get
   */
  public getById(id: number): Promise<Editor> {
    const endpoint = Endpoint.editor(id);
    return this.apiClient.requestService.get(endpoint);
  }
}
