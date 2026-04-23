import nock from 'nock';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

import {NpmsIO} from '.';

const apiBaseUrl = 'https://api.npms.io';
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

const searchResultItem = {
  package: {
    date: '2026-04-23T00:00:00.000Z',
    description: 'Test package',
    links: {
      npm: 'https://www.npmjs.com/package/test-package',
    },
    maintainers: [
      {
        email: 'maintainer@example.com',
        username: 'maintainer',
      },
    ],
    name: 'test-package',
    publisher: {
      email: 'publisher@example.com',
      username: 'publisher',
    },
    scope: 'unscoped',
    version: '1.0.0',
  },
  score: {
    detail: {
      maintenance: 0.6,
      popularity: 0.7,
      quality: 0.8,
    },
    final: 0.7,
  },
  searchScore: 12.34,
};

describe('NpmsIO', () => {
  let npms: NpmsIO;

  beforeEach(() => {
    nock.disableNetConnect();
    npms = new NpmsIO();
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it('fetches suggestions from /search/suggestions and returns array with highlight', async () => {
    const wrongEndpoint = nock(apiBaseUrl).get('/v2/search').query(true).reply(HTTP_STATUS_INTERNAL_SERVER_ERROR, {
      message: 'wrong endpoint',
    });

    const suggestionsResponse = [
      {
        ...searchResultItem,
        highlight: '<em>test</em>-package',
      },
    ];

    const suggestionsEndpoint = nock(apiBaseUrl)
      .get('/v2/search/suggestions')
      .query(
        new URLSearchParams([
          ['q', 'test'],
          ['size', '1'],
        ])
      )
      .reply(HTTP_STATUS_OK, suggestionsResponse);

    const result = await npms.api.search.getSuggestions('test', {size: '1'});

    expect(suggestionsEndpoint.isDone()).toBe(true);
    expect(wrongEndpoint.isDone()).toBe(false);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]?.highlight).toBe('<em>test</em>-package');
    expect(result[0]?.package.name).toBe('test-package');
  });

  it('fetches suggestions without size by only sending q', async () => {
    const suggestionsResponse = [
      {
        ...searchResultItem,
        highlight: '<em>test</em>-package',
      },
    ];

    const suggestionsEndpoint = nock(apiBaseUrl)
      .get('/v2/search/suggestions')
      .query(new URLSearchParams([['q', 'test']]))
      .reply(HTTP_STATUS_OK, suggestionsResponse);

    const result = await npms.api.search.getSuggestions('test');

    expect(suggestionsEndpoint.isDone()).toBe(true);
    expect(result).toHaveLength(1);
    expect(result[0]?.package.name).toBe('test-package');
  });

  it('searches packages via /search with from and size', async () => {
    const response = {
      results: [searchResultItem],
      total: 1,
    };

    const searchEndpoint = nock(apiBaseUrl)
      .get('/v2/search')
      .query(
        new URLSearchParams([
          ['from', '5'],
          ['q', 'test'],
          ['size', '10'],
        ])
      )
      .reply(HTTP_STATUS_OK, response);

    const result = await npms.api.search.searchPackage('test', {from: '5', size: '10'});

    expect(searchEndpoint.isDone()).toBe(true);
    expect(result.total).toBe(1);
    expect(result.results[0]?.package.name).toBe('test-package');
  });

  it('encodes scoped package names for packageInfo', async () => {
    const packageInfoResponse = {
      analyzedAt: '2026-04-23T00:00:00.000Z',
      collected: {
        metadata: {
          name: '@types/node',
        },
      },
      evaluation: {
        maintenance: {},
        popularity: {},
        quality: {},
      },
      score: {
        detail: {
          maintenance: 0.5,
          popularity: 0.8,
          quality: 0.9,
        },
        final: 0.73,
      },
    };

    const packageInfoEndpoint = nock(apiBaseUrl)
      .get('/v2/package/%40types%2Fnode')
      .reply(HTTP_STATUS_OK, packageInfoResponse);

    const result = await npms.api.package.packageInfo('@types/node');

    expect(packageInfoEndpoint.isDone()).toBe(true);
    expect(result.collected.metadata.name).toBe('@types/node');
  });

  it('posts package names to /package/mget', async () => {
    const requestBody = ['react', 'lodash'];
    const response = {
      lodash: {
        analyzedAt: '2026-04-23T00:00:00.000Z',
      },
      react: {
        analyzedAt: '2026-04-23T00:00:00.000Z',
      },
    };

    const mgetEndpoint = nock(apiBaseUrl)
      .post('/v2/package/mget', body => JSON.stringify(body) === JSON.stringify(requestBody))
      .reply(HTTP_STATUS_OK, response);

    const result = await npms.api.package.multiPackageInfo(requestBody);

    expect(mgetEndpoint.isDone()).toBe(true);
    expect(Object.keys(result)).toEqual(['lodash', 'react']);
  });
});
