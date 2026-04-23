import {describe, expect, it} from 'vitest';

import {Endpoint} from './Endpoints';

describe('Endpoint', () => {
  it('uses v2 map and routing endpoints', () => {
    expect(Endpoint.Map.bounds()).toBe('/api/v2/map/bounds/');
    expect(Endpoint.Map.settings()).toBe('/api/v2/map/settings/');
    expect(Endpoint.Routing.route()).toBe('/api/v2/routing/route/');
  });

  it('uses v2 auth and updates endpoints', () => {
    expect(Endpoint.Session.status()).toBe('/api/v2/auth/status/');
    expect(Endpoint.Session.key()).toBe('/api/v2/auth/session/');
    expect(Endpoint.Updates.fetch()).toBe('/api/v2/updates/fetch/');
  });
});
