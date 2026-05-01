export type Authorization = HawkAuthorization | OAuthAuthorization;

export interface ClientOptions extends Partial<HawkAuthorization>, Partial<OAuthAuthorization> {
  apiUrl?: string;
}

export interface HawkAuthorization {
  apiKey: string;
  apiKeyId: string;
}

export interface OAuthAuthorization {
  accessToken: string;
}
