import {StatusCodes as HTTP_STATUS} from 'http-status-codes';
import nock from 'nock';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

import {c3nav} from '../c3nav';

describe('SessionAPI', () => {
  let client: c3nav;

  beforeEach(() => {
    client = new c3nav('https://test.c3nav.de/api');
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('gets auth status and session key', async () => {
    nock('https://test.c3nav.de')
      .get('/api/v2/auth/status/')
      .reply(HTTP_STATUS.OK, {
        key_type: 'anonymous',
        readonly: true,
        scopes: ['public'],
      });

    nock('https://test.c3nav.de').get('/api/v2/auth/session/').reply(HTTP_STATUS.OK, {
      key: 'session-key',
    });

    const status = await client.api.session.getStatus();
    const key = await client.api.session.getSessionKey();

    expect(status.key_type).toBe('anonymous');
    expect(key.key).toBe('session-key');
  });
});
