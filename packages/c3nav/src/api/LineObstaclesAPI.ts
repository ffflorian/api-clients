import {Endpoint} from '../Endpoints';
import {LineObstacles} from '../interfaces/';
import {RequestService} from '../RequestService';

export class LineObstaclesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<LineObstacles[]> {
    const endpoint = Endpoint.lineObstacles();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<LineObstacles> {
    const endpoint = Endpoint.lineObstacles(id);
    return this.requestService.get(endpoint);
  }
}
