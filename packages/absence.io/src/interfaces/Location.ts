export interface NewLocation {
  /** the region used to determine the translated names of the holidays. Seperation to region needed when setting to custom. */
  holidayCountryLanguage: string;
  /** list of holidays assigned to the location */
  holidayIds: string;
  /** the region used to rectrieve the holidays for this user. eg. "de-by" */
  holidaySubregion: string;
  /** indicates if holidays are to be inherited from the main location */
  inheritHolidays: boolean;
  /** list of users who are members of the location */
  memberIds?: string[];
  /** the name of the location */
  name: string;
}

export interface Location extends Required<NewLocation> {
  /** bool to display if the location is the main one or not */
  readonly mainLocation: boolean;
  /** count of users who are members of the location */
  readonly memberCount: number;
  /** ics link for viewing absences in external applications, prefix: https://app.absence.io/ */
  readonly icsLink: string;
  /** unique identifier */
  readonly _id: string;
}
