export class ApplicationConfigurationAPI {
  constructor(private readonly baseURL: string) {
  }

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
  public async getAppConfig(country: string): Promise<Buffer> {
    const endpoint = `/configuration/country/${country}/app_config`;
    const response = await fetch(new URL(endpoint, this.baseURL), {
      headers: {Accept: 'application/zip'},
    });
    return response.arrayBuffer().then(buffer => Buffer.from(buffer));
  }
}
