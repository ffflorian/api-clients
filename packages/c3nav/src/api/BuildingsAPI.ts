import {Endpoint} from '../Endpoints';
import {Buildings} from '../interfaces/';
import {RequestService} from '../RequestService';

export class BuildingsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Buildings[]> {
    const endpoint = Endpoint.buildings();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Buildings> {
    const endpoint = Endpoint.buildings(id);
    return this.requestService.get(endpoint);
  }
}
