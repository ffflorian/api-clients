import {Endpoint} from '../Endpoints';
import {Routing} from '../interfaces/';
import {RequestService} from '../RequestService';

export class RoutingAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Routing[]> {
    const endpoint = Endpoint.routing();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Routing> {
    const endpoint = Endpoint.routing(id);
    return this.requestService.get(endpoint);
  }
}
