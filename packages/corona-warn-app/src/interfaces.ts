import type {DiagnosisKeysAPI, ApplicationConfigurationAPI} from './api';

export interface ClientOptions {
  apiUrl?: string;
}

export interface API {
  applicationConfiguration: ApplicationConfigurationAPI;
  diagnosisKeys: DiagnosisKeysAPI;
}
