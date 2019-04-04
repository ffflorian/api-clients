import {NewAbsence} from './Absence';

export interface PaginationOptions {
  filter: {[key: string]: string};
  limit: number;
  relations?: string[];
  skip: number;
}

export interface RequestOptions extends PaginationOptions, NewAbsence {}
