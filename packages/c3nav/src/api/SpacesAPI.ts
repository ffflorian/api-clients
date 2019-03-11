import {Endpoint} from '../Endpoints';
import {Spaces} from '../interfaces/';
import {RequestService} from '../RequestService';

export class SpacesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Spaces[]> {
    const endpoint = Endpoint.spaces();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Spaces> {
    const endpoint = Endpoint.spaces(id);
    return this.requestService.get(endpoint);
  }
}
