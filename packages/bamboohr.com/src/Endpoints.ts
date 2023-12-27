import * as qs from 'qs';
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
      let path = `/${Endpoint.EMPLOYEES}/`;
      if (id) {
        path += `${id}/`;
      }

      if (fields) {
        path += `?${qs.stringify({fields: fields.join(',')})}`;
      }

      return path;
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
