import type {APIClient} from '@ffflorian/api-client';

import {describe, expect, it, vi} from 'vitest';

import {GitHubUserAPI} from './api/GitHub/GitHubUserAPI';
import {ProjectAPI} from './api/ProjectAPI';

const clientOptions = {apiKey: 'test-key'};

const createApiClient = (): APIClient => {
  return {
    get: vi.fn().mockResolvedValue({data: {ok: true}}),
  } as unknown as APIClient;
};

describe('API endpoint mappings', () => {
  it('ProjectAPI.getContributors uses the contributors endpoint', async () => {
    const apiClient = createApiClient();
    const projectApi = new ProjectAPI(apiClient, clientOptions);

    await projectApi.getContributors('npm', 'grunt', {page: 1, per_page: 2});

    expect(apiClient.get).toHaveBeenCalledWith('/npm/grunt/contributors/', {
      data: {page: 1, per_page: 2},
    });
  });

  it('ProjectAPI.getDependentRepositories uses the dependent_repositories endpoint', async () => {
    const apiClient = createApiClient();
    const projectApi = new ProjectAPI(apiClient, clientOptions);

    await projectApi.getDependentRepositories('npm', 'grunt', {page: 3, per_page: 4});

    expect(apiClient.get).toHaveBeenCalledWith('/npm/grunt/dependent_repositories/', {
      data: {page: 3, per_page: 4},
    });
  });

  it('ProjectAPI.getUsage uses the usage endpoint', async () => {
    const apiClient = createApiClient();
    const projectApi = new ProjectAPI(apiClient, clientOptions);

    await projectApi.getUsage('npm', 'grunt');

    expect(apiClient.get).toHaveBeenCalledWith('/npm/grunt/usage/');
  });

  it('GitHubUserAPI.getDependencies uses dependencies endpoint and merges platform with options', async () => {
    const apiClient = createApiClient();
    const githubUserApi = new GitHubUserAPI(apiClient, clientOptions);

    await githubUserApi.getDependencies('ffflorian', 'npm', {page: 2, per_page: 5});

    expect(apiClient.get).toHaveBeenCalledWith('/github/ffflorian/dependencies/', {
      data: {page: 2, per_page: 5, platform: 'npm'},
    });
  });

  it('GitHubUserAPI.getProjects uses the projects endpoint', async () => {
    const apiClient = createApiClient();
    const githubUserApi = new GitHubUserAPI(apiClient, clientOptions);

    await githubUserApi.getProjects('ffflorian', {page: 1, per_page: 10});

    expect(apiClient.get).toHaveBeenCalledWith('/github/ffflorian/projects/', {
      data: {page: 1, per_page: 10},
    });
  });
});
