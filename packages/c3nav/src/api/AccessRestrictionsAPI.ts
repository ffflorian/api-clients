import {Endpoint} from '../Endpoints';
import {AccessRestrictions} from '../interfaces/';
import {RequestService} from '../RequestService';

export class AccessRestrictionsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<AccessRestrictions[]> {
    const endpoint = Endpoint.accessRestrictions();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<AccessRestrictions> {
    const endpoint = Endpoint.accessRestrictions(id);
    return this.requestService.get(endpoint);
  }
}
