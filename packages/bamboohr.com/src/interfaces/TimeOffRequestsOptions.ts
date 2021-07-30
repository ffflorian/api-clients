export interface TimeOffRequestsOptions {
  /** Limit to requests that the user has a particular level of access to. Legal values are: "view" or "approve". Defaults to view. */
  action?: string;
  /** A particular employee ID to limit the response to. */
  employeeId?: string;
  /** YYYY-MM-DD. Only show time off that occurs on/before the specified end date. */
  end: string;
  /** A particular request ID to limit the response to. */
  id?: number;
  /** YYYY-MM-DD. Only show time off that occurs on/after the specified start date. */
  start: string;
  /** A comma separated list of request status values to include. If omitted, requests of all status values are included. Legal values are "approved", "denied", "superceded", "requested", "canceled". */
  status?: string;
  /** A comma separated list of time off types IDs to include limit the response to. If omitted, requests of all types are included. */
  type?: string;
}
