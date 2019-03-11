import {Endpoint} from '../Endpoints';
import {AccessRestrictionGroups} from '../interfaces/';
import {RequestService} from '../RequestService';

export class AccessRestrictionGroupsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<AccessRestrictionGroups[]> {
    const endpoint = Endpoint.accessRestrictionGroups();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<AccessRestrictionGroups> {
    const endpoint = Endpoint.accessRestrictionGroups(id);
    return this.requestService.get(endpoint);
  }
}
