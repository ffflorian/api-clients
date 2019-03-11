import {Endpoint} from '../Endpoints';
import {Updates} from '../interfaces/';
import {RequestService} from '../RequestService';

export class UpdatesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Updates[]> {
    const endpoint = Endpoint.updates();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Updates> {
    const endpoint = Endpoint.updates(id);
    return this.requestService.get(endpoint);
  }
}
