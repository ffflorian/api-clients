import nock from 'nock';
import {beforeEach, describe, expect, it} from 'vitest';

import {type Check, type Metrics, type Recipient, type StatusPage, UpdownIO} from '.';

const HTTP_STATUS_OK = 200;

const check: Check = {
  alias: '',
  apdex_t: 0.5,
  created_at: '2023-12-28T11:13:27Z',
  custom_headers: {},
  disabled_locations: [],
  down: false,
  down_since: null,
  enabled: true,
  error: null,
  favicon_url: null,
  http_body: '',
  http_verb: 'GET/HEAD',
  last_check_at: '2021-12-17T05:00:01Z',
  last_status: 200,
  mute_until: null,
  next_check_at: '2021-12-17T05:00:16Z',
  period: 60,
  published: false,
  recipients: ['email:12345'],
  ssl: {
    error: null,
    tested_at: '2021-12-17T04:58:04Z',
    valid: true,
  },
  string_match: '',
  token: 'ngg8',
  type: 'https',
  up_since: null,
  uptime: 100,
  url: 'https://updown.io',
};

const metrics: Metrics = {
  apdex: 0.999,
  requests: {
    by_response_time: {
      under1000: 87422,
      under125: 70521,
      under2000: 87434,
      under250: 71126,
      under4000: 87438,
      under500: 87357,
    },
    failures: 2,
    samples: 87441,
    satisfied: 87357,
    tolerated: 77,
  },
  timings: {
    connection: 88,
    handshake: 183,
    namelookup: 9,
    redirect: 0,
    response: 90,
    total: 370,
  },
  uptime: 99.999,
};

const recipient: Recipient = {
  id: 'email:12345',
  name: 'tech@example.com',
  type: 'email',
  value: 'tech@example.com',
};

const statusPage: StatusPage = {
  access_key: null,
  checks: ['ngg8'],
  description: null,
  name: 'My Page',
  token: 'j4uqk',
  url: 'https://updown.io/p/j4uqk',
  visibility: 'public',
};

describe('UpdownIO', () => {
  let updown: UpdownIO;

  beforeEach(() => {
    nock.cleanAll();
    updown = new UpdownIO('test-api-key');
  });

  it('gets metrics from /metrics endpoint', async () => {
    nock('https://updown.io').get('/api/checks/ngg8/metrics/').query({group: 'time'}).reply(HTTP_STATUS_OK, metrics);

    const result = await updown.api.checks.getMetrics('ngg8', {group: 'time'});

    expect(result).toStrictEqual(metrics);
  });

  it('adds a check and maps camelCase options to snake_case payload', async () => {
    nock('https://updown.io')
      .post('/api/checks/', body => {
        const payload = body as Record<string, unknown>;
        return (
          payload.url === 'https://example.com' &&
          payload.custom_headers !== undefined &&
          payload.disabled_locations !== undefined &&
          payload.customHeaders === undefined &&
          payload.disabledLocations === undefined
        );
      })
      .reply(HTTP_STATUS_OK, check);

    const result = await updown.api.checks.addCheck('https://example.com', {
      customHeaders: {'X-Api-Key': 'secret'},
      disabledLocations: ['lan'],
    });

    expect(result).toStrictEqual(check);
  });

  it('updates a check and maps camelCase options to snake_case payload', async () => {
    nock('https://updown.io')
      .put('/api/checks/ngg8/', body => {
        const payload = body as Record<string, unknown>;
        return (
          payload.custom_headers !== undefined &&
          payload.disabled_locations !== undefined &&
          payload.customHeaders === undefined &&
          payload.disabledLocations === undefined
        );
      })
      .reply(HTTP_STATUS_OK, check);

    const result = await updown.api.checks.updateCheck('ngg8', {
      customHeaders: {'X-Api-Key': 'updated-secret'},
      disabledLocations: ['tok'],
    });

    expect(result).toStrictEqual(check);
  });

  it('supports recipients list/create/delete endpoints', async () => {
    nock('https://updown.io').get('/api/recipients/').reply(HTTP_STATUS_OK, [recipient]);
    nock('https://updown.io')
      .post('/api/recipients/', {
        name: 'Tech',
        selected: true,
        type: 'email',
        value: 'tech@example.com',
      })
      .reply(HTTP_STATUS_OK, recipient);
    nock('https://updown.io').delete('/api/recipients/email%3A12345/').reply(HTTP_STATUS_OK, {deleted: true});

    const listed = await updown.api.recipients.getRecipients();
    const created = await updown.api.recipients.addRecipient({
      name: 'Tech',
      selected: true,
      type: 'email',
      value: 'tech@example.com',
    });
    const deleted = await updown.api.recipients.deleteRecipient('email:12345');

    expect(listed).toStrictEqual([recipient]);
    expect(created).toStrictEqual(recipient);
    expect(deleted).toStrictEqual({deleted: true});
  });

  it('supports status pages list/create/update/delete endpoints', async () => {
    nock('https://updown.io').get('/api/status_pages/').reply(HTTP_STATUS_OK, [statusPage]);
    nock('https://updown.io')
      .post('/api/status_pages/', {
        checks: ['ngg8'],
        description: 'Status page description',
        name: 'My Page',
        visibility: 'public',
      })
      .reply(HTTP_STATUS_OK, statusPage);
    nock('https://updown.io')
      .put('/api/status_pages/j4uqk/', {
        description: 'Updated description',
        visibility: 'protected',
      })
      .reply(HTTP_STATUS_OK, {...statusPage, description: 'Updated description', visibility: 'protected'});
    nock('https://updown.io').delete('/api/status_pages/j4uqk/').reply(HTTP_STATUS_OK, {deleted: true});

    const listed = await updown.api.statusPages.getStatusPages();
    const created = await updown.api.statusPages.addStatusPage({
      checks: ['ngg8'],
      description: 'Status page description',
      name: 'My Page',
      visibility: 'public',
    });
    const updated = await updown.api.statusPages.updateStatusPage('j4uqk', {
      description: 'Updated description',
      visibility: 'protected',
    });
    const deleted = await updown.api.statusPages.deleteStatusPage('j4uqk');

    expect(listed).toStrictEqual([statusPage]);
    expect(created).toStrictEqual(statusPage);
    expect(updated).toStrictEqual({...statusPage, description: 'Updated description', visibility: 'protected'});
    expect(deleted).toStrictEqual({deleted: true});
  });
});
