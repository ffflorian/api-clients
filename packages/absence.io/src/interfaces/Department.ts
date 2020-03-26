import type {EmailList} from './EmailList';

export interface NewDepartment {
  /**  list of users who are approvers for the department */
  approverIds?: string[];
  /** defintion of subscribers */
  emailList?: EmailList[];
  /** list of users who are members of the department */
  memberIds?: string[];
  /** the name of the department */
  name: string;
}

export interface Department extends Required<NewDepartment> {
  /** unique identifier */
  readonly _id: string;
  /**  ics link for viewing absences in external applications, prefix: https://app.absence.io/ */
  readonly icsLink: string;
  /** count of users who are members of the department */
  readonly memberCount: number;
}
