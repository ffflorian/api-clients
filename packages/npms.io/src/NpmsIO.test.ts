import {describe, expect, it} from 'vitest';

import {Endpoint} from './Endpoints';
import {NpmsIO} from './NpmsIO';

describe('Endpoint', () => {
  it('search endpoint is /search', () => {
    expect(Endpoint.Search.search()).toBe('/search');
  });

  it('suggestions endpoint is /search/suggestions (distinct from search)', () => {
    expect(Endpoint.Search.suggestions()).toBe('/search/suggestions');
    expect(Endpoint.Search.suggestions()).not.toBe(Endpoint.Search.search());
  });

  it('builds correct single package info endpoint', () => {
    expect(Endpoint.Package.packageInfo('express')).toBe('/package/express');
  });

  it('URL-encodes scoped package names', () => {
    expect(Endpoint.Package.packageInfo('@types/node')).toBe('/package/%40types%2Fnode');
  });

  it('builds correct multi-package info endpoint', () => {
    expect(Endpoint.Package.multiPackageInfo()).toBe('/package/mget');
  });
});

describe('NpmsIO', () => {
  it('constructs with default base URL', () => {
    const client = new NpmsIO();
    expect(client.api.package).toBeDefined();
    expect(client.api.search).toBeDefined();
  });

  it('exposes search and package APIs', () => {
    const client = new NpmsIO();
    expect(typeof client.api.search.searchPackage).toBe('function');
    expect(typeof client.api.search.getSuggestions).toBe('function');
    expect(typeof client.api.package.packageInfo).toBe('function');
    expect(typeof client.api.package.multiPackageInfo).toBe('function');
  });

  it('accepts a custom apiUrl', () => {
    const client = new NpmsIO({apiUrl: 'https://custom.example.com'});
    expect(client.api.search).toBeDefined();
  });

  it('exposes setApiUrl method', () => {
    const client = new NpmsIO();
    expect(typeof client.setApiUrl).toBe('function');
  });
});
