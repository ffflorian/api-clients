import type {ApplicationConfigurationAPI, DiagnosisKeysAPI} from './api';

export interface API {
  applicationConfiguration: ApplicationConfigurationAPI;
  diagnosisKeys: DiagnosisKeysAPI;
}

export interface ClientOptions {
  apiUrl?: string;
}
