import {Endpoint} from '../Endpoints';
import {LocationGroupCategories} from '../interfaces/';
import {RequestService} from '../RequestService';

export class LocationGroupCategoriesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getList(): Promise<LocationGroupCategories[]> {
    const endpoint = Endpoint.locationGroupCategories();
    return this.requestService.get(endpoint);
  }

  public getById(id: number): Promise<LocationGroupCategories> {
    const endpoint = Endpoint.locationGroupCategories(id);
    return this.requestService.get(endpoint);
  }
}
