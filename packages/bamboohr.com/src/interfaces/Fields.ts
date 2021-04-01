export type Writeable<T> = {-readonly [P in keyof T]: T[P]};

/**
 * A complete date with a four-digit year.
 *
 * Format: yyyy-mm-dd
 *
 * Example: "2010-03-19"
 */
export type DateField = string;

/**
 * A standard United States Social Security number, with dashes.
 *
 * Example: "123-45-6789"
 */
export type SSNField = string;

/**
 * A plain text string with a phone number, no formatting is enforced.
 *
 * Example: "1-866-387-9595"
 */
export type PhoneField = string;

/**
 * The plain text name of the gender.
 *
 * Example: "Male" or "Female"
 */
export type GenderField = string;

/**
 * A simple quantity value without thousands separators or currency signs using a period as a decimal point.
 * Example: "27000.00"
 *
 * To add a currency code that is different from the company default, specify the code using the currency tag.
 *
 * Example: `“payRate”: { “value”: “27000.00”, “currency”: “EUR”}`
 */
export type CurrencyField = string | {currency: string; value: string};

/**
 * "yes" or "checkbox" will mark the checkbox checked and everything else will default to unchecked
 *
 * Example: "yes", "checkbox", "no"
 */
export type CheckboxField = 'yes' | 'checkbox' | 'no';

/**
 * The name of the country. Must exist in the BambooHR country list.
 *
 * Example: "Australia", "United States", etc.
 */
export type CountryField = string;

/**
 * The full name of the state/province.
 *
 * Example: "Florida"
 */
export type StateField = string;

/**
 * Plain text status of marriage.
 *
 * Example: "Single" or "Married"
 */
export type MaritalStatusField = string;

/**
 * The employee's employment status as used to filter employees in BambooHR.
 *
 * Example: "Active" or "Inactive"
 */
export type StatusField = 'Active' | 'Inactive';

/**
 * One of several predefined options for the unit of pay.
 *
 * Example: "Hourly", "Salary", "Commission", "Exception Hourly", "Monthly", "Piece Rate", "Contract" or "Daily"
 */
export type PayTypeField = string;

/**
 * A reference to another employee expressed as preferred name-space-last name.
 *
 * Example: "Robert Smith"
 */
export type EmployeeField = string;

/**
 * The UTC time that an event occurred.
 *
 * Format: ####-##-##T##:##:##+##:##
 *
 * Example: "2012-10-17T20:27:17+00:00"
 */
export type TimestampField = string;

/**
 * A larger section of text that can include line feed characters.
 */
export type TextareaField = string;

/**
 * The exact text for an option from a list.
 *
 * Example: "Marketing"
 */
export type ListField = string;

/**
 * An email address.
 *
 * Example: "support@bamboohr.com"
 */
export type EmailField = string;

export interface Fields {
  /** @deprecated please use ‘acaStatusCategory’ */
  acaStatus: string;
  /** The employee's ACA (Affordable Care Act) status. This field can not be updated directly but is calculated based on mappings for employment statuses found on the employmentStatus table. Options are: contractor, full-time, intern-eligible, intern-ineligible, part-time-eligible, part-time-ineligible, and seasonal. */
  acaStatusCategory: string;
  /** The employee's first address line. */
  address1: string;
  /** The employee's second address line. */
  address2: string;
  /** The employee's age. To change age, update dateOfBirth field. */
  age: number;
  /** The employee's work email if set, otherwise their home email. */
  bestEmail: EmailField;
  /** The employee's month and day of birth. To change birthday, update dateOfBirth field. */
  birthday: string;
  /** The amount of the most recent bonus. */
  bonusAmount: CurrencyField;
  /** Comment about the most recent bonus. */
  bonusComment: string;
  /** The date of the last bonus. */
  bonusDate: DateField;
  /** The reason for the most recent bonus. */
  bonusReason: ListField;
  /** The employee's city. */
  city: string;
  /** This field name contains a typo, and exists for backwards compatibility. */
  commisionDate: DateField;
  /** The amount of the most recent commission. */
  commissionAmount: CurrencyField;
  /** Comment about the most recent commission. */
  commissionComment: string;
  /** The date of the last commission. */
  commissionDate: DateField;
  /** The employee's country. */
  country: CountryField;
  /** The id of the user who created the employee. Read only. May be null if employee was created before the release of this field. */
  readonly createdByUserId: number;
  /** The date the employee was born. */
  dateOfBirth: DateField;
  /** The employee's **current* department. */
  department: ListField;
  /** The employee's name displayed in a format configured by the user. Read only. */
  readonly displayName: string;
  /** The employee's **current* division. */
  division: ListField;
  /** The employee's EEO job category. These are defined by the U.S. Equal Employment Opportunity Commission. */
  eeo: ListField;
  /** Employee number (assigned by your company). */
  employeeNumber: string;
  /** The employee's **current* employment status. Options are customized by account. Read-only starting with version 1.1; update using the `employmentStatus` table. */
  readonly employmentHistoryStatus: ListField;
  /** The employee's ethnicity. */
  ethnicity: ListField;
  /** The FLSA Overtime Status (Exempt or Non-exempt). */
  exempt: ListField;
  /** The employee's first name. */
  firstName: string;
  /** Deprecated please use 'exempt' */
  flsaCode: ListField;
  /** The employee's first and last name. (e.g., John Doe). Read only. */
  readonly fullName1: string;
  /** The employee's last and first name. (e.g., Doe, John). Read only. */
  readonly fullName2: string;
  /** The employee's full name and their preferred name. (e.g., Doe, John Quentin (JDog)). Read only. */
  readonly fullName3: string;
  /** The employee's full name without their preferred name, last name first. (e.g., Doe, John Quentin). Read only. */
  readonly fullName4: string;
  /** The employee's full name without their preferred name, first name first. (e.g., John Quentin Doe). Read only. */
  readonly fullName5: string;
  /** The employee's gender (Male or Female). */
  gender: GenderField;
  /** The date the employee was hired. */
  hireDate: DateField;
  /** The employee's home email address. */
  homeEmail: EmailField;
  /** The employee's home phone number. */
  homePhone: PhoneField;
  /** The employee ID automatically assigned by BambooHR. Read only. */
  readonly id: number;
  /** Should employee be included in payroll (Yes or No) */
  includeInPayroll: boolean;
  /** Whether a photo has been uploaded for the employee. Read only. */
  readonly isPhotoUploaded: boolean;
  /** The **current** value of the employee's job title, updating this field will create a new row in position history. */
  jobTitle: ListField;
  /** The date and time that the employee record was last changed. */
  lastChanged: TimestampField;
  /** The employee's last name. */
  lastName: string;
  /** The employee's **current** location. */
  location: ListField;
  /** The employee's marital status (Single, Married, or Domestic Partnership). */
  maritalStatus: ListField;
  /** The employee's middle name. */
  middleName: string;
  /** The employee's mobile phone number. */
  mobilePhone: PhoneField;
  /** The employee's National ID number */
  nationalId: string;
  /** The employee's nationality */
  nationality: ListField;
  /** The employee's NIN number */
  nin: string;
  /** The date the employee was originally hired. Available starting with version 1.1. */
  originalHireDate: DateField;
  /** The employee's **current** pay per. ie: "Hour", "Day", "Week", "Month", "Quarter", "Year". */
  paidPer: string;
  /** The reason for the employee's last pay rate change. */
  payChangeReason: ListField;
  /** The employee's **current** pay frequency. ie: "Weekly", "Every other week", "Twice a month", "Monthly", "Quarterly", "Twice a year", or "Yearly" */
  payFrequency: ListField;
  /** The custom pay group that the employee belongs to. */
  payGroup: ListField;
  /** The ID value corresponding to the pay group that an employee belongs to. */
  payGroupId: number;
  /** The employee's **current** pay rate (e.g., $8.25). */
  payRate: CurrencyField;
  /** The day the most recent change was made. */
  payRateEffectiveDate: DateField;
  /** The employee's **current** pay schedule. */
  paySchedule: ListField;
  /** The ID value corresponding to the pay schedule that an employee belongs to. */
  payScheduleId: number;
  /** The employee's **current** pay type. ie: "hourly","salary","commission","exception hourly","monthly","weekly","piece rate","contract","daily","pro rata". */
  payType: PayTypeField;
  /** The employee's preferred name. */
  preferredName: string;
  /** The employee's Canadian Social Insurance Number. */
  sin: string;
  /** The employee's Social Security number. */
  ssn: SSNField;
  /** The number of hours the employee works in a standard week. */
  standardHoursPerWeek: number;
  /** The employee's state/province. */
  state: StateField;
  /** The 2 character abbreviation for the employee's state (US only). Read only. */
  readonly stateCode: string;
  /** The employee's employee status (Active or Inactive). */
  status: StatusField;
  /** The employee’s **current** supervisor. Read only. */
  readonly supervisor: EmployeeField;
  /** The ID of the employee's **current** supervisor. Read only. */
  readonly supervisorEId: number;
  /** The email of the employee's **current** supervisor. Read only. */
  readonly supervisorEmail: string;
  /** The 'employeeNumber' of the employee's **current** supervisor. Read only. */
  readonly supervisorId: number;
  /** The date the employee was terminated. Read-only starting with version 1.1; update using the employmentStatus table. */
  readonly terminationDate: DateField;
  /** Should time tracking be enabled for the employee (Yes or No) */
  timeTrackingEnabled: boolean;
  /** The employee's work email address. */
  workEmail: EmailField;
  /** The employee's work phone number, without extension. */
  workPhone: PhoneField;
  /** The employee's work phone extension (if any). */
  workPhoneExtension: string;
  /** The employee's work phone and extension. Read only */
  readonly workPhonePlusExtension: string;
  /** The employee's ZIP code. */
  zipcode: string;
}

export type WritableFields = Partial<Writeable<Fields>>;
