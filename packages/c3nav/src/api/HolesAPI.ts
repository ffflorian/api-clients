import {Endpoint} from '../Endpoints';
import {Holes} from '../interfaces/';
import {RequestService} from '../RequestService';

export class HolesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Holes[]> {
    const endpoint = Endpoint.holes();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Holes> {
    const endpoint = Endpoint.holes(id);
    return this.requestService.get(endpoint);
  }
}
