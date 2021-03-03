import * as qs from 'qs';
import {Fields} from './interfaces/Fields';

export namespace Endpoint {
  const EMPLOYEES = 'employees';
  const DIRECTORY = 'directory';
  const TIME_OFF = 'time_off';
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
    export function whosOut(start?: string, end?: string): string {
      let path = `/${TIME_OFF}/${WHOS_OUT}/`;

      if (start || end) {
        path += `?${qs.stringify({end, start})}`;
      }

      return path;
    }
  }
}
