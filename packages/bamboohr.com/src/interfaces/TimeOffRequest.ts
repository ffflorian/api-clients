import {TimeOffType} from './TimeOffType';

interface TimeOffRequestActions {
  approve: boolean;
  bypass: boolean;
  cancel: boolean;
  deny: boolean;
  edit: boolean;
  view: boolean;
}

interface TimeOffRequestAmount {
  amount: string;
  unit: string;
}

interface TimeOffRequestStatus {
  lastChanged: string;
  lastChangedByUserId: string;
  status: string;
}

export interface TimeOffRequest {
  actions: TimeOffRequestActions;
  amount: TimeOffRequestAmount;
  created: string;
  dates: Record<string, string>;
  employeeId: string;
  end: string;
  id: string;
  name: string;
  notes: [];
  start: string;
  status: TimeOffRequestStatus;
  type: TimeOffType;
}
