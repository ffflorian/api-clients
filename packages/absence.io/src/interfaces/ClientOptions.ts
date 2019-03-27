export interface Authorization {
  apiKey: string;
  apiKeyId: string;
}

export interface ClientOptions extends Authorization {
  apiUrl?: string;
}
