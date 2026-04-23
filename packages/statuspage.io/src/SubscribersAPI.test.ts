import nock from 'nock';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

import {Statuspage} from './Statuspage';

const pageId = 'test-page';
const apiBaseUrl = `https://${pageId}.statuspage.io`;

const subscriberResponse = {
  can_select_components: false,
  email: 'test@example.com',
  mode: 'email_sms',
  page: {
    id: 'page-id',
    name: 'Test Page',
    time_zone: 'UTC',
    updated_at: '2026-04-23T00:00:00.000Z',
    url: 'https://status.example.com',
  },
};

describe('SubscribersAPI', () => {
  let statuspage: Statuspage;

  beforeEach(() => {
    nock.disableNetConnect();
    statuspage = new Statuspage(pageId);
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it('createComponentSubscription() uses POST /api/v2/subscribers.json with subscriber body', async () => {
    const endpoint = nock(apiBaseUrl)
      .post(
        '/api/v2/subscribers.json',
        body =>
          JSON.stringify(body) ===
          JSON.stringify({subscriber: {component_id: 'component-1', email: 'test@example.com'}})
      )
      .reply(200, subscriberResponse);

    const result = await statuspage.api.subscribers.createComponentSubscription({
      component_id: 'component-1',
      email: 'test@example.com',
    });

    expect(endpoint.isDone()).toBe(true);
    expect(result.email).toBe('test@example.com');
  });

  it('createIncidentSubscription() uses POST /api/v2/subscribers.json with subscriber body', async () => {
    const endpoint = nock(apiBaseUrl)
      .post('/api/v2/subscribers.json', body => {
        const payload = body as {subscriber?: {email?: string; incident_id?: string}};
        return payload.subscriber?.email === 'test@example.com' && payload.subscriber?.incident_id === 'incident-1';
      })
      .reply(200, subscriberResponse);

    const result = await statuspage.api.subscribers.createIncidentSubscription({
      email: 'test@example.com',
      incident_id: 'incident-1',
    });

    expect(endpoint.isDone()).toBe(true);
    expect(result.email).toBe('test@example.com');
  });

  it('createPageSubscription() uses POST /api/v2/subscribers.json with subscriber body', async () => {
    const endpoint = nock(apiBaseUrl)
      .post(
        '/api/v2/subscribers.json',
        body => JSON.stringify(body) === JSON.stringify({subscriber: {email: 'test@example.com'}})
      )
      .reply(200, subscriberResponse);

    const result = await statuspage.api.subscribers.createPageSubscription({
      email: 'test@example.com',
    });

    expect(endpoint.isDone()).toBe(true);
    expect(result.email).toBe('test@example.com');
  });

  it('removeSubscription() uses DELETE /api/v2/subscribers/:id.json', async () => {
    const endpoint = nock(apiBaseUrl)
      .delete('/api/v2/subscribers/subscriber-1.json')
      .reply(200, 'true', {'content-type': 'application/json'});

    const result = await statuspage.api.subscribers.removeSubscription('subscriber-1');

    expect(endpoint.isDone()).toBe(true);
    expect(result).toBe(true);
  });
});
