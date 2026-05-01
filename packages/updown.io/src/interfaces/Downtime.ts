export interface Downtime {
  details_url: string;
  duration: number;
  ended_at: null | string;
  error: string;
  id: string;
  partial: boolean;
  started_at: string;
}
