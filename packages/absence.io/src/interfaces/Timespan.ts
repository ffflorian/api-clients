export interface NewTimespan {
  /** optional comments on timespans */
  commentary?: string;
  /** end of the timespan. Format: "2018-01-01T12:59:57.000Z" stored in UTC */
  end?: string;
  /** start of the timespan. Format: "2018-01-01T12:53:59.000Z" stored in UTC */
  start: string;
  /** +0000 UTC offset of the timespan in format (+/-)0200. Example: +0200 or -0300 */
  timezone?: string;
  /** GMT Name of the timezone the timespan should be associated with */
  timezoneName?: string;
  /** defines the type of the timespan. Can be work or break */
  type: string;
  /** who the timespan is assigned to */
  userId: string;
}

export interface Timespan extends Required<NewTimespan> {
  /** unique identifier */
  readonly _id: string;
  /** end truncated to the minute for in-app calculations */
  readonly effectiveEnd: string;
  /** start truncated to the minute for in-app calculations */
  readonly effectiveStart: string;
}
