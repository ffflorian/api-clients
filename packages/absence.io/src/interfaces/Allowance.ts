export interface NewAllowance {
  /** indicates if it can be used currently. */
  active: boolean;
  /** the intial amount of days a user will have per year */
  initialAllowance: number;
  /** the display name of the allowance */
  name: string;
  /** indicates if unu */
  residualLeaveAvailable: boolean;
}

export interface Allowance extends Required<NewAllowance> {
  /** the unique id of the allowance */
  readonly _id: string;
}
