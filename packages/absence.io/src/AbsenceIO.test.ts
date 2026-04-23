import nock from 'nock';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';

import type {ClientOptions, NewUser, Paginated, PaginationOptions, Reason, User} from './interfaces';

import {AbsenceIO} from './AbsenceIO';
import {AbsenceAPI, ReasonAPI, UserAPI} from './api';

const OK_STATUS = 200;

const hawkOptions: ClientOptions = {
  apiKey: 'hawk-key',
  apiKeyId: 'hawk-id',
};

const createMockApiClient = () => ({
  delete: vi.fn(),
  get: vi.fn(),
  interceptors: {
    request: [],
    response: [],
  },
  post: vi.fn(),
  put: vi.fn(),
  setBaseURL: vi.fn(),
});

describe('absence.io API', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('updates a user via PUT and returns a single user object', async () => {
    const apiClient = createMockApiClient();
    const api = new UserAPI(apiClient as any, hawkOptions);
    const payload: Partial<NewUser> = {firstName: 'John'};
    const expected: User = {
      _id: 'user-1',
      approverId: 'approver-1',
      avatar: 'avatar',
      departmentId: 'department-1',
      email: 'john@example.com',
      employeeId: 'e-1',
      firstName: 'John',
      holidayCountryLanguage: 'de',
      holidayIds: [],
      holidaySubregion: 'de-by',
      icsLink: 'https://app.absence.io/ics',
      inheritHolidays: true,
      isApprover: false,
      language: 'en',
      lastName: 'Doe',
      locationId: 'location-1',
      name: 'John Doe',
      notes: '',
      role: 'role',
      roleId: 'role-id',
      status: 2,
      teamId: [],
      vacationDays: 30,
      workingDays: ['1970-01-01T00:00:00Z', []],
    };

    apiClient.put.mockResolvedValue({data: expected});

    const user = await api.updateUser('user-1', payload);

    expect(apiClient.put).toHaveBeenCalledWith('/users/user-1/', payload);
    expect(user).toEqual(expected);
  });

  it('retrieves users by options and returns paginated data', async () => {
    const apiClient = createMockApiClient();
    const api = new UserAPI(apiClient as any, hawkOptions);
    const options: PaginationOptions = {
      filter: {firstName: 'John'},
      limit: 5,
      skip: 0,
    };
    const expected: Paginated<User[]> = {
      count: 1,
      data: [
        {
          _id: 'user-1',
          approverId: 'approver-1',
          avatar: 'avatar',
          departmentId: 'department-1',
          email: 'john@example.com',
          employeeId: 'e-1',
          firstName: 'John',
          holidayCountryLanguage: 'de',
          holidayIds: [],
          holidaySubregion: 'de-by',
          icsLink: 'https://app.absence.io/ics',
          inheritHolidays: true,
          isApprover: false,
          language: 'en',
          lastName: 'Doe',
          locationId: 'location-1',
          name: 'John Doe',
          notes: '',
          role: 'role',
          roleId: 'role-id',
          status: 2,
          teamId: [],
          vacationDays: 30,
          workingDays: ['1970-01-01T00:00:00Z', []],
        },
      ],
      limit: 5,
      skip: 0,
      totalCount: 1,
    };

    apiClient.post.mockResolvedValue({data: expected});

    const users = await api.retrieveUserByOption(options);

    expect(apiClient.post).toHaveBeenCalledWith('/users/', options);
    expect(users).toEqual(expected);
  });

  it('forwards pagination options for retrieving reasons', async () => {
    const apiClient = createMockApiClient();
    const api = new ReasonAPI(apiClient as any, hawkOptions);
    const options: PaginationOptions = {
      filter: {name: 'like sick'},
      limit: 25,
      skip: 10,
    };
    const expected: Paginated<Reason[]> = {
      count: 0,
      data: [],
      limit: 25,
      skip: 10,
      totalCount: 0,
    };

    apiClient.post.mockResolvedValue({data: expected});

    const reasons = await api.retrieveReasons(options);

    expect(apiClient.post).toHaveBeenCalledWith('/reasons/', options);
    expect(reasons).toEqual(expected);
  });

  it('deletes an absence via DELETE', async () => {
    const apiClient = createMockApiClient();
    const api = new AbsenceAPI(apiClient as any, hawkOptions);

    apiClient.delete.mockResolvedValue({});

    await api.deleteAbsence('absence-1');

    expect(apiClient.delete).toHaveBeenCalledWith('/absences/absence-1/');
  });

  it('uses OAuth bearer token authorization when accessToken is configured', async () => {
    const absenceIO = new AbsenceIO({accessToken: 'oauth-token'});
    const scope = nock('https://app.absence.io')
      .post('/users/')
      .matchHeader('authorization', 'Bearer oauth-token')
      .reply(OK_STATUS, {
        count: 0,
        data: [],
        limit: 1,
        skip: 0,
        totalCount: 0,
      });

    const users = await absenceIO.api.user.retrieveUsers({limit: 1, skip: 0});

    expect(users.data).toEqual([]);
    expect(scope.isDone()).toBe(true);
  });
});
