import {describe, expect, it} from 'vitest';

import {Endpoint} from './Endpoints';
import {UpdownIO} from './UpdownIO';

describe('Endpoint', () => {
  it('builds correct metrics endpoint', () => {
    expect(Endpoint.Checks.metrics('abc1')).toBe('/checks/abc1/metrics/');
  });

  it('builds correct downtimes endpoint (distinct from metrics)', () => {
    expect(Endpoint.Checks.downtimes('abc1')).toBe('/checks/abc1/downtimes/');
    expect(Endpoint.Checks.downtimes('abc1')).not.toBe(Endpoint.Checks.metrics('abc1'));
  });

  it('builds correct single check endpoint', () => {
    expect(Endpoint.Checks.check('xyz9')).toBe('/checks/xyz9/');
  });

  it('builds correct nodes endpoint', () => {
    expect(Endpoint.nodes()).toBe('/nodes/');
  });

  it('builds correct ipv4 and ipv6 endpoints', () => {
    expect(Endpoint.Nodes.ipv4()).toBe('/nodes/ipv4/');
    expect(Endpoint.Nodes.ipv6()).toBe('/nodes/ipv6/');
  });
});

describe('UpdownIO', () => {
  it('accepts an apiKey string as shorthand constructor argument', () => {
    const client = new UpdownIO('test-key');
    expect(client.api.checks).toBeDefined();
    expect(client.api.nodes).toBeDefined();
  });

  it('accepts a ClientOptions object', () => {
    const client = new UpdownIO({apiKey: 'test-key'});
    expect(client.api.checks).toBeDefined();
  });

  it('exposes checks and nodes APIs', () => {
    const client = new UpdownIO({apiKey: 'k'});
    expect(typeof client.api.checks.getChecks).toBe('function');
    expect(typeof client.api.nodes.getNodes).toBe('function');
  });

  it('exposes setApiUrl method', () => {
    const client = new UpdownIO({apiKey: 'k'});
    expect(typeof client.setApiUrl).toBe('function');
  });
});
