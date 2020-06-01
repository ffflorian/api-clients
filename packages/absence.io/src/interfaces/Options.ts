import type {NewAbsence} from './Absence';
import type {NewAllowance} from './Allowance';
import type {NewDepartment} from './Department';
import type {NewLocation} from './Location';
import type {NewReason} from './Reason';
import type {NewTimespan} from './Timespan';
import type {NewUser} from './User';

export type Filter = Record<string, string | Record<string, string>>;

export type Sorting = Record<string, number>;

export interface PaginationOptions {
    filter?: Filter;
    limit: number;
    relations?: string[];
    skip: number;
    sortBy?: Sorting;
}

export type RequestOptions =
    | PaginationOptions
    | Partial<NewAbsence | NewAllowance | NewDepartment | NewLocation | NewReason | NewTimespan | NewUser>;
