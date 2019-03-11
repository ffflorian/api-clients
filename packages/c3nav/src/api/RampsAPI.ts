import {Endpoint} from '../Endpoints';
import {Ramps} from '../interfaces/';
import {RequestService} from '../RequestService';

export class RampsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Ramps[]> {
    const endpoint = Endpoint.ramps();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Ramps> {
    const endpoint = Endpoint.ramps(id);
    return this.requestService.get(endpoint);
  }
}
