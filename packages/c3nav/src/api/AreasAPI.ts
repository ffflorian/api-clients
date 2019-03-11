import {Endpoint} from '../Endpoints';
import {Areas} from '../interfaces/';
import {RequestService} from '../RequestService';

export class AreasAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Areas[]> {
    const endpoint = Endpoint.areas();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Areas> {
    const endpoint = Endpoint.areas(id);
    return this.requestService.get(endpoint);
  }
}
