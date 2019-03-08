import {GitHubRepositoryAPI, GitHubUserAPI, PlatformAPI, ProjectAPI, UserAPI} from '../api/';

export interface API {
  github: {
    repository: GitHubRepositoryAPI;
    user: GitHubUserAPI;
  };
  platform: PlatformAPI;
  project: ProjectAPI;
  user: UserAPI;
}
