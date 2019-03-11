import {Endpoint} from '../Endpoints';
import {Columns} from '../interfaces/';
import {RequestService} from '../RequestService';

export class ColumnsAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<Columns[]> {
    const endpoint = Endpoint.columns();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<Columns> {
    const endpoint = Endpoint.columns(id);
    return this.requestService.get(endpoint);
  }
}
