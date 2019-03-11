import {Endpoint} from '../Endpoints';
import {Changesets} from '../interfaces/';
import {RequestService} from '../RequestService';

export class ChangesetsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Changesets[]> {
    const endpoint = Endpoint.changesets();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Changesets> {
    const endpoint = Endpoint.changesets(id);
    return this.requestService.get(endpoint);
  }
}
