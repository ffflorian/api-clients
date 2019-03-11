import {Endpoint} from '../Endpoints';
import {Editor} from '../interfaces/';
import {RequestService} from '../RequestService';

export class EditorAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Editor[]> {
    const endpoint = Endpoint.editor();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Editor> {
    const endpoint = Endpoint.editor(id);
    return this.requestService.get(endpoint);
  }
}
