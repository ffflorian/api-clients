import {DoctorsNote} from './Absence';
import {Allowance} from './Allowance';

export interface NewReason {
  /** the allowance type of which this reason deducts. If no allowance is defined then the reason won't deduct from any allowance */
  allowanceTypeId: string;
  /** the color and icon associated with this reason */
  colorId: string;
  /** defines if and when a doctorsNote is required for this reason */
  doctorsNote?: DoctorsNote;
  /** defines email addresses subscribed to this type of absence reason */
  emailList?: string[];
  /**  defines if other basic users can view details for absences of this reason type */
  isPublic?: boolean;
  /** the display name of this reason */
  name: string;
  /** if true, an allowance type must be assigned, if false, the allowance type will be `null` */
  reducesDays?: boolean;
  /** defines if this reason requires approval */
  requiresApproval?: boolean;
  /** defines the sort index of this reason on the ui */
  sortIndex?: number;
}

export interface Reason extends Required<NewReason> {
  /** unique identifier */
  readonly _id: string;
  /** shows the changes of allowance types on this object and the date they occured */
  readonly allowanceHistory: Allowance[];
}
