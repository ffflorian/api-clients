import {Endpoint} from '../Endpoints';
import {LeaveDescriptions} from '../interfaces/';
import {RequestService} from '../RequestService';

export class LeaveDescriptionsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<LeaveDescriptions[]> {
    const endpoint = Endpoint.leaveDescriptions();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<LeaveDescriptions> {
    const endpoint = Endpoint.leaveDescriptions(id);
    return this.requestService.get(endpoint);
  }
}
