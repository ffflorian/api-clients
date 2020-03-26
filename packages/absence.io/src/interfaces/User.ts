import type {WorkingDays} from './WorkingDay';

export interface NewUser {
  /** the default approver for this user. If not set it will inherit the approver from the department */
  approverId?: string;
  /** the department this user belongs to */
  departmentId: string;
  /** email used for authentication. On update, a verification email will be sent to the new address */
  email: string;
  /** an optional custom identifier for the user */
  employeeId?: string;
  /** */
  firstName: string;
  /** the region used to determine the translated names of the holidays. Seperation to region needed when setting to custom. */
  holidayCountryLanguage: string;
  /** the actual holidays this user has assigned */
  holidayIds?: any[];
  /** the region used to rectrieve the holidays for this user. eg. "de-by" */
  holidaySubregion: string;
  /** ics link for viewing absences in external applications, prefix?: https://app.absence.io/ */
  icsLink?: string;
  /** indicates if holidays are to be inherited from the location */
  inheritHolidays?: boolean;
  /** if the user is only of role User, this field enables him to be set as an approver. If this is set to false for Owner,HR, Admin then these users will not appear in the approver selection combos. Technically they can still approve. */
  isApprover?: boolean;
  /** the language the UI will be displayed in */
  language?: 'de' | 'en';
  /** */
  lastName: string;
  /** the location this user belongs to */
  locationId: string;
  /** comment field on the user */
  notes?: string;
  /** the role assigned to the user */
  role: string;
  /** the role of this user */
  roleId: string;
  /** the status of the user */
  status?: UserStatus;
  /** array of team ids this user belongs to */
  teamId?: string[];
  /** the current default vaction days for this user. if not specified on creation, the companys default vactaionDays will be set. */
  vacationDays?: number;
  /** defines the working days for the user. see below for details */
  workingDays?: WorkingDays;
}

export interface User extends Required<NewUser> {
  /** unique identifier */
  readonly _id: string;
  /** the id for the user avatar/image */
  readonly avatar: string;
  /** first and last name concatentated for your convenience */
  readonly name: string;
}

export enum UserStatus {
  /** Account is deleted and will be removed from the system 30 days after deletion. */
  DELETED = 0,
  /** The account was created. The user cannot login yet */
  CREATED = 1,
  /** Account is active. User can login */
  ACTIVE = 2,
  /** Account is inactive. User cannot login */
  INACTIVE = 3,
  /** The invitation email was sent. The user cannot login yet */
  EMAIL_SENT = 4,
}
