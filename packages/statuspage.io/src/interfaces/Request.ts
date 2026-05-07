export type CombinedSubscriberData = EmailSubscriberData | PhoneSubscriberData | WebhookSubscriberData;

export interface ComponentSubscriberData {
  component_id: string;
}

export interface EmailSubscriberData {
  email: string;
}

export interface IncidentSubscriberData {
  incident_id: string;
}

export interface PhoneSubscriberData {
  /** Defaults to `us` if not supplied. */
  phone_country?: string;
  phone_number: string;
}

export interface RequestOptions {
  subscriber?:
    | {
        id: string;
      }
    | CombinedSubscriberData
    | (CombinedSubscriberData & IncidentSubscriberData);
}

export interface SubscriberOptions {
  isSubscribed: boolean;
}

export interface WebhookSubscriberData extends EmailSubscriberData {
  endpoint: string;
}
