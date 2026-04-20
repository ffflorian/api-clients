import {describe, expect, it} from 'vitest';

import {LibrariesIO} from './LibrariesIO';

describe('LibrariesIO', () => {
  it('moves GET body fields to query params and omits request body', () => {
    const librariesIO = new LibrariesIO({apiKey: 'api-key'});
    const interceptor = (librariesIO as any).apiClient.interceptors.request[0];
    const options = {
      body: JSON.stringify({page: 2, per_page: 30}),
      method: 'GET',
      url: new URL('https://libraries.io/api/npm/grunt/dependents/'),
    };

    const nextOptions = interceptor(options);

    expect(nextOptions.body).toBeUndefined();
    expect(nextOptions.url.searchParams.get('api_key')).toBe('api-key');
    expect(nextOptions.url.searchParams.get('page')).toBe('2');
    expect(nextOptions.url.searchParams.get('per_page')).toBe('30');
  });

  it('adds api key to non-GET request body', () => {
    const librariesIO = new LibrariesIO({apiKey: 'api-key'});
    const interceptor = (librariesIO as any).apiClient.interceptors.request[0];
    const options = {
      body: '{"q":"grunt"}',
      method: 'POST',
      url: new URL('https://libraries.io/api/search/'),
    };

    const nextOptions = interceptor(options);

    expect(JSON.parse(nextOptions.body)).toEqual(JSON.parse('{"api_key":"api-key","q":"grunt"}'));
  });
});
