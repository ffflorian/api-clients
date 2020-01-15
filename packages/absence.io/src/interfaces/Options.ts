import {NewAbsence} from './Absence';
import {NewAllowance} from './Allowance';
import {NewDepartment} from './Department';
import {NewLocation} from './Location';
import {NewReason} from './Reason';
import {NewTimespan} from './Timespan';
import {NewUser} from './User';

export type Filter = Record<string, string | Record<string, string>>;

export interface PaginationOptions {
  filter?: Filter;
  limit: number;
  relations?: string[];
  skip: number;
}

export type RequestOptions =
  | PaginationOptions
  | Partial<NewAbsence | NewAllowance | NewDepartment | NewLocation | NewReason | NewTimespan | NewUser>;
