export interface EmailList {
  /** comma seperated emails. Emails do not need to be registered with absence.. */
  email: string;
  /** reason ids for which notifications will be sent to the attached email if an absence is createed, deleted, or an update is approved */
  leaveTypes?: string[];
}
