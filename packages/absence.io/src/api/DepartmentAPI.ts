import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';

export class DepartmentAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  private checkApiKey() {
    if (!this.requestService.isApiKeySet()) {
      throw new Error('An API key needs to be set in order to use the checks API.');
    }
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.requestService.setApiUrl(newUrl);
  }

  /**
   * Retrieve a single department
   */
  public retrieveDepartment(id: string): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Department.departments(id);
    return this.requestService.get(endpoint);
  }

  /**
   * Retrieve departments
   */
  public retrieveDepartments(): Promise<any> {
    this.checkApiKey();
    const endpoint = Endpoint.Department.departments();
    return this.requestService.post(endpoint);
  }
}
