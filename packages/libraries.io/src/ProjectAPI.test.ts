import {describe, expect, it, vi} from 'vitest';

import {ProjectAPI} from './api/ProjectAPI';

describe('ProjectAPI', () => {
  it('uses contributors endpoint for getContributors', async () => {
    const get = vi.fn().mockResolvedValue({data: []});
    const api = new ProjectAPI({get} as any, {apiKey: 'api-key'});

    await api.getContributors('npm', 'grunt', {page: 1});

    expect(get).toHaveBeenCalledWith('/npm/grunt/contributors/', {data: {page: 1}});
  });

  it('uses dependent repositories endpoint for getDependentRepositories', async () => {
    const get = vi.fn().mockResolvedValue({data: []});
    const api = new ProjectAPI({get} as any, {apiKey: 'api-key'});

    await api.getDependentRepositories('npm', 'grunt', {per_page: 20});

    expect(get).toHaveBeenCalledWith('/npm/grunt/dependent_repositories/', {data: {per_page: 20}});
  });

  it('uses usage endpoint for getUsage', async () => {
    const get = vi.fn().mockResolvedValue({data: {}});
    const api = new ProjectAPI({get} as any, {apiKey: 'api-key'});

    await api.getUsage('npm', 'grunt');

    expect(get).toHaveBeenCalledWith('/npm/grunt/usage/');
  });
});
