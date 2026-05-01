import {StatusCodes as HTTP_STATUS} from 'http-status-codes';
import nock from 'nock';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

import {c3nav} from '../c3nav';

const ROUTE_DISTANCE = 100;

describe('RoutingAPI', () => {
  let client: c3nav;

  beforeEach(() => {
    client = new c3nav('https://test.c3nav.de/api');
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('posts a route query', async () => {
    nock('https://test.c3nav.de')
      .post('/api/v2/routing/route/', {destination: 2, origin: 1})
      .reply(HTTP_STATUS.OK, {
        options: {
          mode: 'fastest',
          restrictions: 'normal',
          walk_speed: 'default',
          way_types: {},
        },
        request: {destination: 2, origin: 1},
        result: {
          destination: {id: 2},
          distance: ROUTE_DISTANCE,
          distance_str: '100 m',
          duration: 60,
          duration_str: '1 min',
          items: [],
          origin: {id: 1},
        },
      });

    const route = await client.api.routing.postRoute({destination: 2, origin: 1});

    expect(route.result?.distance).toBe(ROUTE_DISTANCE);
  });
});
