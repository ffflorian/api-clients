import {Endpoint} from '../Endpoints';
import {Level, LevelListOptions} from '../interfaces';
import {RequestService} from '../RequestService';

/**
 * A Level is a Location – so if it is visible, you can use its ID in the Location API as well.
 */
export class LevelListAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public getDetail(id: number, options?: LevelListOptions): Promise<Level> {
    const endpoint = Endpoint.Level.levels(id);
    return this.requestService.get(endpoint, options);
  }

  public getList(options?: LevelListOptions): Promise<Level[]> {
    const endpoint = Endpoint.Level.levels();
    return this.requestService.get(endpoint, options);
  }
}
