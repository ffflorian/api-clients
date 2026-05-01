export interface TimeOffRequestsOptions {
  /** Limit to requests the user can view, approve, or to their own requests. Defaults to "view". */
  action?: 'approve' | 'myRequests' | 'view';
  /** A particular employee ID to limit the response to. */
  employeeId?: number;
  /** YYYY-MM-DD. Only show time off that occurs on/before the specified end date. */
  end: string;
  /** When true, omits the notes object from each request in the response. */
  excludeNote?: boolean;
  /** A particular request ID to limit the response to. */
  id?: number;
  /** YYYY-MM-DD. Only show time off that occurs on/after the specified start date. */
  start: string;
  /** A comma separated list of request status values to include. If omitted, requests of all status values are included. Legal values are "approved", "denied", "superceded", "requested", "canceled". */
  status?: string;
  /** A comma separated list of time off types IDs to include limit the response to. If omitted, requests of all types are included. */
  type?: string;
}
