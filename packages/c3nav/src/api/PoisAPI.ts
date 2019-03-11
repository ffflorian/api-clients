import {Endpoint} from '../Endpoints';
import {Pois} from '../interfaces/';
import {RequestService} from '../RequestService';

export class PoisAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Pois[]> {
    const endpoint = Endpoint.pois();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Pois> {
    const endpoint = Endpoint.pois(id);
    return this.requestService.get(endpoint);
  }
}
