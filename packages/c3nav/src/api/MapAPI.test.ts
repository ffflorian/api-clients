import {StatusCodes as HTTP_STATUS} from 'http-status-codes';
import nock from 'nock';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

import {c3nav} from '../c3nav';

const INITIAL_BOUNDS_FIRST_LAT = -10;
const INITIAL_BOUNDS_FIRST_LNG = -20;
const INITIAL_BOUNDS_SECOND_LAT = 20;
const INITIAL_BOUNDS_SECOND_LNG = 30;
const INITIAL_BOUNDS = [
  [INITIAL_BOUNDS_FIRST_LAT, INITIAL_BOUNDS_FIRST_LNG],
  [INITIAL_BOUNDS_SECOND_LAT, INITIAL_BOUNDS_SECOND_LNG],
] as const;
const INITIAL_LEVEL = 1;

describe('MapAPI', () => {
  let client: c3nav;

  beforeEach(() => {
    client = new c3nav('https://test.c3nav.de/api');
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('gets map settings', async () => {
    nock('https://test.c3nav.de').get('/api/v2/map/settings/').reply(HTTP_STATUS.OK, {
      initial_bounds: INITIAL_BOUNDS,
      initial_level: INITIAL_LEVEL,
      tile_server: 'https://tiles.example.com',
    });

    const settings = await client.api.map.getSettings();

    expect(settings.initial_level).toBe(INITIAL_LEVEL);
  });
});
