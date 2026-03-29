import {TimeOffType} from './TimeOffType';

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

export interface TimeOffRequestActions {
  approve: boolean;
  bypass: boolean;
  cancel: boolean;
  deny: boolean;
  edit: boolean;
  view: boolean;
}

export interface TimeOffRequestAmount {
  amount: string;
  unit: string;
}

export interface TimeOffRequestStatus {
  lastChanged: string;
  lastChangedByUserId: string;
  status: string;
}
