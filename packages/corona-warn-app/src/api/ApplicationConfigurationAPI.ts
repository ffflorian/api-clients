export class ApplicationConfigurationAPI {
  constructor(protected readonly baseURL: string) {}

  /**
   * Get application configuration for a country.
   * @param country An ISO 3166-1 alpha-2 country key (e.g. `DE`).
   * @description Gives application configuration for a specific country, which
   * includes:
   * * Minimum risk score
   * * Risk score classification
   * * Risk score parameters
   * * Attenuation duration
   * * Application version configuration
   */
  public async getAppConfig(country: string): Promise<ArrayBuffer> {
    const endpoint = `/configuration/country/${country}/app_config`;
    const response = await fetch(endpoint, {
      headers: {Accept: 'application/zip'},
    });
    if (!response.ok) {
      throw new Error(`Failed to retrieve app config for country ${country}: ${response.statusText}`);
    }
    return response.arrayBuffer();
  }
}
