export interface Paginated<T> {
  count: number;
  data: T;
  limit: number;
  skip: number;
  totalCount: number;
}

export interface Day {
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

export interface Absence {
  _id: string;
  approverId: string;
  assignedToId: string;
  canApproveAbsence: boolean;
  canBeDeleted: boolean;
  canBeEdited: boolean;
  company: string;
  created: string;
  days: Day[];
  daysCount: number;
  denyReason: string;
  doctorsNote: {reminders: any[]; status: number};
  documentIds: string[];
  end: string;
  endDateTime: string;
  forwardHistory: ForwardHistory[];
  historical: false;
  isHourly: boolean;
  modified: string;
  reasonId: string;
  start: string;
  startDateTime: string;
  status: number;
  userNotificationIds: string[];
}

export interface Department {
  _id: string;
  company: string;
  emailList: string[];
  id: string;
  name: string;
  userNotifications: string[];
}

export interface DepartmentExtended extends Department {
  approverIds: string[];
  assistantIds: string[];
  memberCount: number;
  memberIds: string[];
}
