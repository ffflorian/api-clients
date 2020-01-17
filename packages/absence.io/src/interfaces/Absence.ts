import {Reason} from './Reason';
import {User} from './User';
import {WorkingDay} from './WorkingDay';

export interface AbsenceDay {
  date: string;
  duration: number;
  endTime: string;
  halfHoliday: boolean;
  holiday: boolean;
  holidayDayType: WorkingDay | null;
  mandatoryLeave: false;
  startTime: string;
  value: number;
  weekend: boolean;
}

export interface DoctorsNote {
  reminders: any[];
  status: number;
}

export interface ForwardHistory {
  action: string;
  admin: string;
  date: string;
}

export interface Absence extends Required<NewAbsence> {
  /** unique identifier */
  readonly _id: string;
  /** assigned approver (only available if requested via `relations`) */
  readonly approver?: User;
  /** assigned user (only available if requested via `relations`) */
  readonly assignedTo?: User;
  /** date the absence was created */
  readonly created: string;
  /** array detailing each day inside the absence date range */
  readonly days: AbsenceDay[];
  /** the number of working days this absence counts as */
  readonly daysCount: number;
  /** date the absence was updated */
  readonly modified: string;
  /** assigned reason (only available if requested via `relations`) */
  readonly reason?: Reason;
}

export interface NewAbsence {
  /** id of the user who will/has approved this absence. If the creator has sufficient permissions it will be the same as `assignedToId` */
  approverId: string;
  /** id of the user who is assigned to this absence */
  assignedToId: string;
  canApproveAbsence?: boolean;
  canBeDeleted?: boolean;
  canBeEdited?: boolean;
  /** optional comment */
  commentary?: string;
  company?: string;
  /** an optional comment for a denied absence request */
  denyReason?: string;
  /** object with boolean value to determine if a note is required for an absence and if it was submitted */
  doctorsNote?: boolean;
  documentIds?: string[];
  /** the end date and time of the absence */
  end: string;
  endDateTime?: string;
  forwardHistory?: ForwardHistory[];
  historical?: false;
  isHourly?: boolean;
  /** id of the associated absence type */
  reasonId: string;
  /** the start date and time of the absence */
  start: string;
  startDateTime?: string;
  /** the status of the absence */
  status?: number;
  /** id of the user who will act as a substitute during this absence */
  substituteId?: string;
  userNotificationIds?: string[];
}
