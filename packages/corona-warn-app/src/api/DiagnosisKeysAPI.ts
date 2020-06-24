import type {AxiosInstance} from 'axios';
import type {ClientOptions} from '../interfaces';

export class DiagnosisKeysAPI {
  protected readonly apiClient: AxiosInstance;
  protected readonly options: ClientOptions;

  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;
  }

  /**
   * Get all countries for which diagnosis keys are available.
   * @returns countries in ISO-3166 format (e.g. `["DE", "FR"]`)
   */
  public async getCountries(): Promise<string[]> {
    const endpoint = `/diagnosis-keys/country`;
    const {data} = await this.apiClient.get<string[]>(endpoint);
    return data;
  }

  /**
   * Get all dates for which diagnosis keys are available.
   * @param country An ISO 3166-1 alpha-2 country key (e.g. `DE`).
   * @description Gives a list of all dates for which diagnosis keys are
   * available for a specific country. For Germany, this would return a list of
   * dates for the past 14 days (if all of them contain diagnosis keys).
   */
  public async getDatesByCountry(country: string): Promise<string[]> {
    const endpoint = `/diagnosis-keys/country/${country}/date`;
    const {data} = await this.apiClient.get<string[]>(endpoint);
    return data;
  }

  /**
   * Get all diagnosis keys for a specific date.
   * @param country An ISO 3166-1 alpha-2 country key (e.g. `DE`).
   * @param date An ISO-8601 date descriptor (e.g. `2020-05-01`).
   * Server time zone is UTC.
   * @description Gives all diagnosis keys for a specific country on a specific
   * date. If there are no diagnosis keys available for that date (but the date
   * is still within the 14-day window), a signed payload with an empty list of
   * diagnosis keys will be returned. If the date is outside of the 14-day
   * window, or in the future, an HTTP error code will be returned.
   */
  public async getKeysByDate(country: string, date: string): Promise<Buffer> {
    const endpoint = `/diagnosis-keys/country/${country}/date/${date}`;
    const {data} = await this.apiClient.get<Buffer>(endpoint, {
      headers: {Accept: 'application/zip'},
      responseType: 'arraybuffer',
    });
    return data;
  }

  /**
   * Get all hours of a specific date for which diagnosis keys are available.
   * @param country An ISO 3166-1 alpha-2 country key (e.g. `DE`).
   * @param date An ISO-8601 date descriptor (e.g. `2020-05-01`).
   * Server time zone is UTC.
   * @description Gives a list of all hours (0-23) of a specific date for which
   * diagnosis keys are available for a specific country. For the current date,
   * a list containing the respective numbers/hours for which data is available
   * (e.g. 0-17) will be returned. If the date is outside of the 14-day window,
   * or in the future, an HTTP error code will be returned.
   */
  public async getHoursByDate(country: string, date: string): Promise<number[]> {
    const endpoint = `/diagnosis-keys/country/${country}/date/${date}/hour`;
    const {data} = await this.apiClient.get<number[]>(endpoint);
    return data;
  }

  /**
   * Get all diagnosis keys for a specific hour on a specific date.
   * @param country An ISO 3166-1 alpha-2 country key (e.g. `DE`).
   * @param hour An integer number between 0 and 23.
   * Server time zone is UTC.
   * @description Gives all diagnosis keys for a specific country on a specific
   * date within a specific hour. If there are no diagnosis keys available for
   * the hour (but the date is still within the 14-day window), a signed payload
   * with an empty list of diagnosis keys will be returned. If the date is
   * outside of the 14-day window, or in the future, or an hour > 23 was
   * requested, an HTTP error code will be returned.
   */
  public async getKeysByHour(country: string, date: string, hour: number): Promise<Buffer> {
    const endpoint = `/diagnosis-keys/country/${country}/date/${date}/hour/${hour}`;
    const {data} = await this.apiClient.get<Buffer>(endpoint, {
      headers: {Accept: 'application/zip'},
      responseType: 'arraybuffer',
    });
    return data;
  }

  /**
   * Post diagnosis keys.
   * @param keys A collection of temporary exposure keys.
   * @param cwaAuthorization TAN code associated with this diagnosis key submission.
   * @param cwaFake Requests with a value of "0" will be fully processed. Any other
   * value indicates that this request shall be handled as a "fake" request.
   */
  public async postKeys(keys: Buffer, cwaAuthorization: string, cwaFake: string): Promise<void> {
    const endpoint = '/diagnosis-keys';
    await this.apiClient.post(endpoint, keys, {
      headers: {
        'cwa-authorization': cwaAuthorization,
        'cwa-fake': cwaFake,
      },
    });
  }
}
