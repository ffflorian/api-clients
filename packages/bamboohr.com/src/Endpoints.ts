import {Fields} from './interfaces/Fields';

export const Endpoint = {
  DIRECTORY: 'directory',
  EMPLOYEES: 'employees',
  META: 'meta',
  POLICIES: 'policies',
  REQUESTS: 'requests',
  TIME_OFF: 'time_off',
  TYPES: 'types',
  WHOS_OUT: 'whos_out',

  Employees: {
    employees(id?: number, fields?: Array<keyof Fields>): string {
      const url = new URL(`/${Endpoint.EMPLOYEES}/`, 'https://example.com');

      if (id) {
        url.pathname += `${id}/`;
      }

      if (fields) {
        const params = new URLSearchParams();
        params.append('fields', fields.join(','));
        url.search = params.toString();
      }

      return `${url.pathname}${url.search}`;
    },

    employeeDirectory(): string {
      return `/${Endpoint.EMPLOYEES}/${Endpoint.DIRECTORY}/`;
    },
  },

  TimeOff: {
    whosOut(): string {
      return `/${Endpoint.TIME_OFF}/${Endpoint.WHOS_OUT}/`;
    },

    timeOffTypes(): string {
      return `/${Endpoint.META}/${Endpoint.TIME_OFF}/${Endpoint.TYPES}/`;
    },

    timeOffPolicies(): string {
      return `/${Endpoint.META}/${Endpoint.TIME_OFF}/${Endpoint.POLICIES}/`;
    },

    timeOffRequests(): string {
      return `/${Endpoint.TIME_OFF}/${Endpoint.REQUESTS}/`;
    },
  },
};
