import * as qs from 'qs';
import {Fields} from './interfaces/Fields';

export namespace Endpoint {
  const DIRECTORY = 'directory';
  const EMPLOYEES = 'employees';
  const META = 'meta';
  const POLICIES = 'policies';
  const REQUESTS = 'requests';
  const TIME_OFF = 'time_off';
  const TYPES = 'types';
  const WHOS_OUT = 'whos_out';

  export namespace Employees {
    export function employees(id?: number, fields?: Array<keyof Fields>): string {
      let path = `/${EMPLOYEES}/`;
      if (id) {
        path += `${id}/`;
      }

      if (fields) {
        path += `?${qs.stringify({fields: fields.join(',')})}`;
      }

      return path;
    }

    export function employeeDirectory(): string {
      return `/${EMPLOYEES}/${DIRECTORY}/`;
    }
  }

  export namespace TimeOff {
    export function whosOut(): string {
      return `/${TIME_OFF}/${WHOS_OUT}/`;
    }

    export function timeOffTypes(): string {
      return `/${META}/${TIME_OFF}/${TYPES}/`;
    }

    export function timeOffPolicies(): string {
      return `/${META}/${TIME_OFF}/${POLICIES}/`;
    }

    export function timeOffRequests(): string {
      return `/${TIME_OFF}/${REQUESTS}/`;
    }
  }
}
