import {Endpoint} from '../Endpoints';
import {Session} from '../interfaces/';
import {RequestService} from '../RequestService';

export class SessionAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Session[]> {
    const endpoint = Endpoint.session();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Session> {
    const endpoint = Endpoint.session(id);
    return this.requestService.get(endpoint);
  }
}
