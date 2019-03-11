import {Endpoint} from '../Endpoints';
import {Stairs} from '../interfaces/';
import {RequestService} from '../RequestService';

export class StairsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Stairs[]> {
    const endpoint = Endpoint.stairs();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Stairs> {
    const endpoint = Endpoint.stairs(id);
    return this.requestService.get(endpoint);
  }
}
