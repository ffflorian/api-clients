import nock from 'nock';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

import {BambooHR} from './BambooHR';

describe('BambooHR API', () => {
  const EMPLOYEE_ID = 123;
  const HTTP_OK = 200;
  const REQUEST_ID = 456;

  let bambooHR: BambooHR;

  beforeEach(() => {
    bambooHR = new BambooHR({
      apiKey: 'test-api-key',
      companyDomain: 'example',
    });

    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it('getEmployee sends fields and onlyCurrent query', async () => {
    nock('https://api.bamboohr.com')
      .get('/api/gateway.php/example/v1/employees/0/')
      .query({fields: 'firstName,lastName', onlyCurrent: 'false'})
      .reply(HTTP_OK, {firstName: 'Jane', id: 0, lastName: 'Doe'});

    const employee = await bambooHR.api.employees.getEmployee(0, ['firstName', 'lastName'], false);

    expect(employee.id).toBe(0);
    expect(employee.firstName).toBe('Jane');
  });

  it('listEmployees sends filter, sort, page, and fields parameters', async () => {
    const response = {
      employees: [{employeeId: 1, firstName: 'Jane', lastName: 'Doe', status: 'active'}],
      page: {after: 'cursor-next', limit: 50},
    };

    nock('https://api.bamboohr.com')
      .get('/api/gateway.php/example/v1/employees')
      .query({
        fields: 'workEmail',
        'filter[firstName]': 'Jane',
        'filter[status]': 'active',
        'page[after]': 'cursor-1',
        'page[limit]': '50',
        sort: '-lastName',
      })
      .reply(HTTP_OK, response);

    const employees = await bambooHR.api.employees.listEmployees({
      fields: ['workEmail'],
      filter: {firstName: 'Jane', status: 'active'},
      page: {after: 'cursor-1', limit: 50},
      sort: '-lastName',
    });

    expect(employees).toEqual(response);
  });

  it('timeOffRequests supports action, employeeId, and excludeNote', async () => {
    nock('https://api.bamboohr.com')
      .get('/api/gateway.php/example/v1/time_off/requests/')
      .query(query => {
        return (
          query.action === 'approve' &&
          query.employeeId === '123' &&
          query.end === '2026-01-31' &&
          query.excludeNote === 'true' &&
          query.start === '2026-01-01'
        );
      })
      .reply(HTTP_OK, []);

    const requests = await bambooHR.api.timeOff.timeOffRequests({
      action: 'approve',
      employeeId: 123,
      end: '2026-01-31',
      excludeNote: true,
      start: '2026-01-01',
    });

    expect(requests).toEqual([]);
  });

  it('getTimeOffBalance calls calculator endpoint with end and precision', async () => {
    const response = {
      balances: [
        {balance: '24.00', policy: 'Vacation'},
        {balance: '10.50', policy: 'Sick'},
      ],
    };

    nock('https://api.bamboohr.com')
      .get('/api/gateway.php/example/v1/employees/123/time_off/calculator/')
      .query({end: '2026-06-30', precision: '2'})
      .reply(HTTP_OK, response);

    const result = await bambooHR.api.timeOff.getTimeOffBalance(EMPLOYEE_ID, '2026-06-30', 2);

    expect(result).toEqual(response);
  });

  it('createTimeOffRequest and updateTimeOffRequestStatus both use PUT', async () => {
    const createPayload = {
      employeeId: EMPLOYEE_ID,
      end: '2026-03-07',
      start: '2026-03-05',
      timeOffTypeId: 5,
    };

    const updatePayload = {
      note: 'Approved by manager',
      status: 'approved',
    };

    nock('https://api.bamboohr.com')
      .put('/api/gateway.php/example/v1/time_off/requests/', createPayload)
      .reply(HTTP_OK, {id: REQUEST_ID, status: 'requested'});

    nock('https://api.bamboohr.com')
      .put('/api/gateway.php/example/v1/time_off/requests/456/', updatePayload)
      .reply(HTTP_OK, {id: REQUEST_ID, status: 'approved'});

    const created = await bambooHR.api.timeOff.createTimeOffRequest(createPayload);
    const updated = await bambooHR.api.timeOff.updateTimeOffRequestStatus(REQUEST_ID, updatePayload);

    expect(created).toEqual({id: REQUEST_ID, status: 'requested'});
    expect(updated).toEqual({id: REQUEST_ID, status: 'approved'});
  });
});
