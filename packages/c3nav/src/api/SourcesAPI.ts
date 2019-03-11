import {Endpoint} from '../Endpoints';
import {Sources} from '../interfaces/';
import {RequestService} from '../RequestService';

export class SourcesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Sources[]> {
    const endpoint = Endpoint.sources();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Sources> {
    const endpoint = Endpoint.sources(id);
    return this.requestService.get(endpoint);
  }
}
