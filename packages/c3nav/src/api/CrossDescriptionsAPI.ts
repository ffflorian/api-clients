import {Endpoint} from '../Endpoints';
import {CrossDescriptions} from '../interfaces/';
import {RequestService} from '../RequestService';

export class CrossDescriptionsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<CrossDescriptions[]> {
    const endpoint = Endpoint.crossDescriptions();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<CrossDescriptions> {
    const endpoint = Endpoint.crossDescriptions(id);
    return this.requestService.get(endpoint);
  }
}
