import {NewAbsence} from './Absence';
import {NewAllowance} from './Allowance';
import {NewDepartment} from './Department';
import {NewLocation} from './Location';
import {NewReason} from './Reason';
import {NewTimespan} from './Timespan';
import {NewUser} from './User';

export type Filter = {[key: string]: {[key: string]: string} | string};

export interface PaginationOptions {
  limit: number;
  skip: number;
  filter?: Filter;
  relations?: string[];
}

export type RequestOptions =
  | PaginationOptions
  | Partial<NewAbsence | NewAllowance | NewDepartment | NewLocation | NewReason | NewTimespan | NewUser>;
