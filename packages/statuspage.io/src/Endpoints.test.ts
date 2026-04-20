import {describe, expect, it} from 'vitest';

import {Endpoint} from './Endpoints';

describe('Endpoint', () => {
  it('ACTIVE_JSON constant is "active.json" (not "upcoming.json")', () => {
    expect(Endpoint.ACTIVE_JSON).toBe('active.json');
  });

  it('builds correct active scheduled maintenances endpoint', () => {
    expect(Endpoint.ScheduledMaintenances.active()).toBe('/api/v2/scheduled-maintenances/active.json');
  });

  it('builds correct all scheduled maintenances endpoint (different from active)', () => {
    const all = Endpoint.ScheduledMaintenances.all();
    const active = Endpoint.ScheduledMaintenances.active();
    expect(all).toBe('/api/v2/scheduled-maintenances.json');
    expect(all).not.toBe(active);
  });

  it('builds correct upcoming scheduled maintenances endpoint (different from active)', () => {
    const upcoming = Endpoint.ScheduledMaintenances.upcoming();
    const active = Endpoint.ScheduledMaintenances.active();
    expect(upcoming).toBe('/api/v2/scheduled-maintenances/upcoming.json');
    expect(upcoming).not.toBe(active);
  });

  it('builds correct individual subscriber endpoint', () => {
    expect(Endpoint.Subscribers.subscriber('sub-42')).toBe('/api/v2/subscribers/sub-42.json');
  });

  it('URL-encodes subscriber IDs with special characters', () => {
    expect(Endpoint.Subscribers.subscriber('a/b')).toBe('/api/v2/subscribers/a%2Fb.json');
  });
});
