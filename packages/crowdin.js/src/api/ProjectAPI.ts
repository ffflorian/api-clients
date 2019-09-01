import {APIClient} from '@ffflorian/api-client';
import {Endpoint} from '../Endpoints';
import {AddFileOptions} from '../interfaces';

export class ProjectAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  /**
   * Add new file to Crowdin project.
   * @see https://support.crowdin.com/api/add-file/
   * @param projectIdentifier The project Identifier.
   * @param files Files array that should be added to Crowdin project.
   * Array keys should contain file names with path in Crowdin project.
   *
   * **Note!** 20 files max are allowed to upload per one time file
   * transfer. The maximum size of one file is 100 MB.
   */
  public addFile(projectIdentifier: string, files: string[], options?: AddFileOptions): Promise<any> {
    const endpoint = Endpoint.Project.addFile(projectIdentifier);
    return this.apiClient.requestService.get(endpoint);
  }
}
