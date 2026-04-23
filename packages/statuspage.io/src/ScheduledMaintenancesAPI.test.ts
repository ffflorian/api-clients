import nock from 'nock';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

import {Statuspage} from './Statuspage';

const pageId = 'test-page';
const apiBaseUrl = `https://${pageId}.statuspage.io`;

const scheduledMaintenancesResponse = {
  page: {
    id: 'page-id',
    name: 'Test Page',
    time_zone: 'UTC',
    updated_at: '2026-04-23T00:00:00.000Z',
    url: 'https://status.example.com',
  },
  scheduled_maintenances: [
    {
      created_at: '2026-04-23T00:00:00.000Z',
      id: 'maintenance-1',
      impact: 'none',
      incident_updates: [],
      monitoring_at: null,
      name: 'Test maintenance',
      page_id: 'page-id',
      resolved_at: null,
      scheduled_for: '2026-04-24T00:00:00.000Z',
      scheduled_until: '2026-04-24T01:00:00.000Z',
      shortlink: 'https://stspg.io/test',
      status: 'scheduled',
      updated_at: '2026-04-23T00:00:00.000Z',
    },
  ],
};

describe('ScheduledMaintenancesAPI', () => {
  let statuspage: Statuspage;

  beforeEach(() => {
    nock.disableNetConnect();
    statuspage = new Statuspage(pageId);
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it('getActive() calls /api/v2/scheduled-maintenances/upcoming.json', async () => {
    const wrongAllEndpoint = nock(apiBaseUrl).get('/api/v2/scheduled-maintenances.json').query(true).reply(500, {
      message: 'wrong endpoint',
    });

    const activeEndpoint = nock(apiBaseUrl)
      .get('/api/v2/scheduled-maintenances/upcoming.json')
      .reply(200, scheduledMaintenancesResponse);

    const result = await statuspage.api.scheduledMaintenances.getActive();

    expect(activeEndpoint.isDone()).toBe(true);
    expect(wrongAllEndpoint.isDone()).toBe(false);
    expect(result.scheduled_maintenances).toHaveLength(1);
  });

  it('getAll() calls /api/v2/scheduled-maintenances.json', async () => {
    const wrongUpcomingEndpoint = nock(apiBaseUrl)
      .get('/api/v2/scheduled-maintenances/upcoming.json')
      .query(true)
      .reply(500, {
        message: 'wrong endpoint',
      });

    const allEndpoint = nock(apiBaseUrl)
      .get('/api/v2/scheduled-maintenances.json')
      .reply(200, scheduledMaintenancesResponse);

    const result = await statuspage.api.scheduledMaintenances.getAll();

    expect(allEndpoint.isDone()).toBe(true);
    expect(wrongUpcomingEndpoint.isDone()).toBe(false);
    expect(result.scheduled_maintenances).toHaveLength(1);
  });

  it('getUpcoming() calls /api/v2/scheduled-maintenances/upcoming.json', async () => {
    const upcomingEndpoint = nock(apiBaseUrl)
      .get('/api/v2/scheduled-maintenances/upcoming.json')
      .reply(200, scheduledMaintenancesResponse);

    const result = await statuspage.api.scheduledMaintenances.getUpcoming();

    expect(upcomingEndpoint.isDone()).toBe(true);
    expect(result.scheduled_maintenances).toHaveLength(1);
  });
});
