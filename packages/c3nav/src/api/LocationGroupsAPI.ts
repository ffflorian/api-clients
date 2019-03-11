import {Endpoint} from '../Endpoints';
import {LocationGroups} from '../interfaces/';
import {RequestService} from '../RequestService';

export class LocationGroupsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<LocationGroups[]> {
    const endpoint = Endpoint.locationGroups();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<LocationGroups> {
    const endpoint = Endpoint.locationGroups(id);
    return this.requestService.get(endpoint);
  }
}
