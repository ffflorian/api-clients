import type {AxiosInstance} from 'axios';
import type {ClientOptions} from '../interfaces';

export class ApplicationConfigurationAPI {
  protected readonly apiClient: AxiosInstance;
  protected readonly options: ClientOptions;

  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;
  }

  /**
   * Get application configuration for a country.
   * @param country The ISO-3166 country code (e.g. "DE")
   * @description Gives application configuration for a specific country, which includes:
   * * Minimum risk score
   * * Risk score classification
   * * Risk score parameters
   * * Attenuation duration
   * * Application version configuration
   */
  public async getAppConfig(country: string): Promise<Buffer> {
    const endpoint = `/configuration/country/${country}/app_config`;
    const {data} = await this.apiClient.get<Buffer>(endpoint, {
      headers: {Accept: 'application/zip'},
      responseType: 'arraybuffer',
    });
    return data;
  }
}
