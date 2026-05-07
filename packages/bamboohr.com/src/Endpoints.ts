import type {EmployeesListOptions, Fields} from './interfaces';

export const Endpoint = {
  DIRECTORY: 'directory',
  EMPLOYEES: 'employees',
  Employees: {
    employee(id: number, options?: {fields?: Array<keyof Fields>; onlyCurrent?: boolean}): string {
      const url = new URL(`${Endpoint.EMPLOYEES}/${id}/`, 'https://example.com');
      const params = new URLSearchParams();

      if (options?.fields && options.fields.length > 0) {
        params.append('fields', options.fields.join(','));
      }

      if (options?.onlyCurrent !== undefined) {
        params.append('onlyCurrent', String(options.onlyCurrent));
      }

      url.search = params.toString();

      return `${url.pathname.slice(1)}${url.search}`;
    },

    employeeDirectory(): string {
      return `${Endpoint.EMPLOYEES}/${Endpoint.DIRECTORY}/`;
    },

    employees(id?: number): string {
      const url = new URL(`${Endpoint.EMPLOYEES}/`, 'https://example.com');

      if (id !== undefined) {
        url.pathname += `${id}/`;
      }

      return `${url.pathname.slice(1)}${url.search}`;
    },

    listEmployees(options?: EmployeesListOptions): string {
      const url = new URL(Endpoint.EMPLOYEES, 'https://example.com');
      const params = new URLSearchParams();

      if (options?.fields && options.fields.length > 0) {
        params.append('fields', options.fields.join(','));
      }

      if (options?.sort) {
        params.append('sort', options.sort);
      }

      if (options?.filter?.ids && options.filter.ids.length > 0) {
        params.append('filter[ids]', options.filter.ids.join(','));
      }

      if (options?.filter?.firstName) {
        params.append('filter[firstName]', options.filter.firstName);
      }

      if (options?.filter?.lastName) {
        params.append('filter[lastName]', options.filter.lastName);
      }

      if (options?.filter?.jobTitleName) {
        params.append('filter[jobTitleName]', options.filter.jobTitleName);
      }

      if (options?.filter?.status) {
        params.append('filter[status]', options.filter.status);
      }

      if (options?.page?.limit !== undefined) {
        params.append('page[limit]', String(options.page.limit));
      }

      if (options?.page?.after) {
        params.append('page[after]', options.page.after);
      }

      if (options?.page?.before) {
        params.append('page[before]', options.page.before);
      }

      url.search = params.toString();

      return `${url.pathname.slice(1)}${url.search}`;
    },
  },
  META: 'meta',
  POLICIES: 'policies',
  REQUESTS: 'requests',
  TIME_OFF: 'time_off',
  TimeOff: {
    timeOffBalance(id: number): string {
      return `${Endpoint.EMPLOYEES}/${id}/${Endpoint.TIME_OFF}/calculator/`;
    },

    timeOffPolicies(): string {
      return `${Endpoint.META}/${Endpoint.TIME_OFF}/${Endpoint.POLICIES}/`;
    },

    timeOffRequest(id: number): string {
      return `${Endpoint.TIME_OFF}/${Endpoint.REQUESTS}/${id}/`;
    },

    timeOffRequests(): string {
      return `${Endpoint.TIME_OFF}/${Endpoint.REQUESTS}/`;
    },

    timeOffTypes(): string {
      return `${Endpoint.META}/${Endpoint.TIME_OFF}/${Endpoint.TYPES}/`;
    },

    whosOut(): string {
      return `${Endpoint.TIME_OFF}/${Endpoint.WHOS_OUT}/`;
    },
  },

  TYPES: 'types',

  WHOS_OUT: 'whos_out',
};
