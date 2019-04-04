export interface AbsenceDay {
  date: string;
  duration: number;
  endTime: string;
  halfHoliday: boolean;
  holiday: boolean;
  holidayDayType: any | null;
  mandatoryLeave: false;
  startTime: string;
  value: number;
  weekend: boolean;
}

export interface ForwardHistory {
  action: string;
  admin: string;
  date: string;
}

export interface NewAbsence {
  approverId: string;
  assignedToId: string;
  end: string;
  reasonId: string;
  start: string;
}

export interface Absence extends NewAbsence {
  _id: string;
  canApproveAbsence: boolean;
  canBeDeleted: boolean;
  canBeEdited: boolean;
  company: string;
  created: string;
  days: AbsenceDay[];
  daysCount: number;
  denyReason: string;
  doctorsNote: {reminders: any[]; status: number};
  documentIds: string[];
  endDateTime: string;
  forwardHistory: ForwardHistory[];
  historical: false;
  isHourly: boolean;
  modified: string;
  startDateTime: string;
  status: number;
  userNotificationIds: string[];
}
