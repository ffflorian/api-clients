import nock from 'nock';
import {beforeEach, describe, expect, it} from 'vitest';

import {CratesIO} from './CratesIO';

const HTTP_OK = 200;

describe('CratesIO', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  it('propagates constructor apiKey to auth-required requests', async () => {
    const cratesIO = new CratesIO('token-123');

    nock('https://crates.io')
      .get('/api/v1/crates/serde/following')
      .matchHeader('authorization', 'token-123')
      .reply(HTTP_OK, {following: true});

    const result = await cratesIO.api.crates.following('serde');

    expect(result.following).toBe(true);
  });

  it('uses constructor apiUrl as base URL', async () => {
    const cratesIO = new CratesIO({apiUrl: 'https://example.test/api/v1'});

    nock('https://example.test').get('/api/v1/summary').reply(HTTP_OK, {
      just_updated: [],
      most_downloaded: [],
      most_recently_downloaded: [],
      new_crates: [],
      num_crates: 1,
      num_downloads: 2,
      popular_categories: [],
      popular_keywords: [],
    });

    const result = await cratesIO.summary();

    expect(result.num_crates).toBe(1);
  });

  it('unwraps getVersion response wrapper', async () => {
    const cratesIO = new CratesIO();

    nock('https://crates.io')
      .get('/api/v1/crates/serde/1.0.0')
      .reply(HTTP_OK, {
        version: {
          crate: 'serde',
          crate_size: 123,
          created_at: '2020-01-01T00:00:00Z',
          dl_path: '/api/v1/crates/serde/1.0.0/download',
          downloads: 100,
          features: {},
          id: 1,
          license: 'MIT OR Apache-2.0',
          links: {
            authors: '/api/v1/crates/serde/1.0.0/authors',
            dependencies: '/api/v1/crates/serde/1.0.0/dependencies',
            version_downloads: '/api/v1/crates/serde/1.0.0/downloads',
          },
          num: '1.0.0',
          published_by: null,
          readme_path: '/api/v1/crates/serde/1.0.0/readme',
          updated_at: '2020-01-01T00:00:00Z',
          yanked: false,
        },
      });

    const result = await cratesIO.api.crates.getVersion('serde', '1.0.0');

    expect(result.num).toBe('1.0.0');
  });

  it('returns keywords with created_at field', async () => {
    const cratesIO = new CratesIO();

    nock('https://crates.io')
      .get('/api/v1/keywords')
      .reply(HTTP_OK, {
        keywords: [
          {
            crates_cnt: 42,
            created_at: '2017-01-06T14:23:11Z',
            id: 'http',
            keyword: 'http',
          },
        ],
        meta: {
          total: 1,
        },
      });

    const result = await cratesIO.api.crates.getKeywords();

    expect(result.keywords[0]?.created_at).toBe('2017-01-06T14:23:11Z');
  });

  it('supports yanking a crate version', async () => {
    const cratesIO = new CratesIO('token-456');

    nock('https://crates.io')
      .delete('/api/v1/crates/serde/1.0.0/yank')
      .matchHeader('authorization', 'token-456')
      .reply(HTTP_OK, {ok: true});

    const result = await cratesIO.api.crates.yank('serde', '1.0.0');

    expect(result.ok).toBe(true);
  });
});
