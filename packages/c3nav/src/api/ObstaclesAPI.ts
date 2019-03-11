import {Endpoint} from '../Endpoints';
import {Obstacles} from '../interfaces/';
import {RequestService} from '../RequestService';

export class ObstaclesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Obstacles[]> {
    const endpoint = Endpoint.obstacles();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Obstacles> {
    const endpoint = Endpoint.obstacles(id);
    return this.requestService.get(endpoint);
  }
}
