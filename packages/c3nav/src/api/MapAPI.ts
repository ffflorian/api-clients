import {Endpoint} from '../Endpoints';
import {Bounds} from '../interfaces/';
import {RequestService} from '../RequestService';

export class MapAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /** /bounds/ returns the maximum bounds of the map */
  public getBounds(): Promise<Bounds> {
    const endpoint = Endpoint.Map.bounds();
    return this.requestService.get(endpoint);
  }
}
