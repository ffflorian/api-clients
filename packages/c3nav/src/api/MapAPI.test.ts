import {StatusCodes as HTTP_STATUS} from 'http-status-codes';
import nock from 'nock';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

import {c3nav} from '../c3nav';

describe('MapAPI', () => {
  let client: c3nav;

  beforeEach(() => {
    client = new c3nav('https://test.c3nav.de/api');
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('gets map settings', async () => {
    nock('https://test.c3nav.de')
      .get('/api/v2/map/settings/')
      .reply(HTTP_STATUS.OK, {
        initial_bounds: [
          [-10, -20],
          [20, 30],
        ],
        initial_level: 1,
        tile_server: 'https://tiles.example.com',
      });

    const settings = await client.api.map.getSettings();

    expect(settings.initial_level).toBe(1);
  });
});
