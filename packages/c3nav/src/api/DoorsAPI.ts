import {Endpoint} from '../Endpoints';
import {Doors} from '../interfaces/';
import {RequestService} from '../RequestService';

export class DoorsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Doors[]> {
    const endpoint = Endpoint.doors();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Doors> {
    const endpoint = Endpoint.doors(id);
    return this.requestService.get(endpoint);
  }
}
