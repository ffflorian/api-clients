import nock from 'nock';
import {afterEach, describe, expect, it} from 'vitest';

import {AbsenceIO} from './AbsenceIO';

describe('AbsenceIO API endpoints', () => {
  const absenceIO = new AbsenceIO({
    apiKey: 'api-key',
    apiKeyId: 'api-key-id',
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('retrieves a single allowance from /allowances/{id}/', async () => {
    const allowance = {_id: 'allowance-id', allowance: 25};

    nock('https://app.absence.io').get('/api/v2/allowances/allowance-id/').reply(200, allowance);

    const result = await absenceIO.api.allowanceType.retrieveAllowanceType('allowance-id');

    expect(result).toEqual(allowance);
  });

  it('retrieves allowances from /allowances/', async () => {
    const allowances = {count: 1, data: [{_id: 'allowance-id'}], limit: 50, skip: 0, totalCount: 1};

    nock('https://app.absence.io').post('/api/v2/allowances/').reply(200, allowances);

    const result = await absenceIO.api.allowanceType.retrieveAllowanceTypes({limit: 50, skip: 0});

    expect(result).toEqual(allowances);
  });

  it('retrieves a single reason from /reasontypes/{id}/', async () => {
    const reason = {_id: 'reason-id', name: 'Vacation'};

    nock('https://app.absence.io').get('/api/v2/reasontypes/reason-id/').reply(200, reason);

    const result = await absenceIO.api.reason.retrieveReason('reason-id');

    expect(result).toEqual(reason);
  });

  it('retrieves reasons from /reasontypes/', async () => {
    const reasons = {count: 1, data: [{_id: 'reason-id'}], limit: 50, skip: 0, totalCount: 1};

    nock('https://app.absence.io').post('/api/v2/reasontypes/').reply(200, reasons);

    const result = await absenceIO.api.reason.retrieveReasons();

    expect(result).toEqual(reasons);
  });

  it('updates a user using PUT on /users/{id}/', async () => {
    const userData = {lastName: 'Updated'};
    const updatedUser = {_id: 'user-id', lastName: 'Updated'};

    nock('https://app.absence.io').put('/api/v2/users/user-id/', userData).reply(200, updatedUser);

    const result = await absenceIO.api.user.updateUser('user-id', userData);

    expect(result).toEqual(updatedUser);
  });
});
