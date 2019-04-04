import {APIClient} from '@ffflorian/api-client';
import {ClientOptions, ImageData, RequestOptions, XKCDResult, XKCDResultWithData} from './Interfaces';

export class XKCDAPI {
  private readonly lowestIndex: number;
  private readonly JSON_INFO_FILE: string;
  protected readonly apiClient: APIClient;
  protected readonly options: ClientOptions;

  constructor(apiClient: APIClient, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;

    this.lowestIndex = 1;
    this.JSON_INFO_FILE = 'info.0.json';
  }

  /**
   * Get a random comic.
   * @param options Request options
   */
  public async getRandom(options: {withData: true}): Promise<XKCDResultWithData>;
  public async getRandom(options?: RequestOptions): Promise<XKCDResultWithData>;
  public async getRandom(options: RequestOptions = {}): Promise<XKCDResult | XKCDResultWithData> {
    const latest = await this.getLatest();
    const randomIndex = Math.floor(Math.random() * (latest.num - this.lowestIndex + 1)) + this.lowestIndex;

    const metaData = await this.getByIndex(randomIndex);

    if (options.withData === true) {
      const imageData = await this.getImage(metaData.img);
      return {
        ...metaData,
        data: imageData,
      };
    }

    return metaData;
  }

  /**
   * Get the latest comic.
   * @param options Request options
   */
  public async getLatest(options: {withData: true}): Promise<XKCDResultWithData>;
  public async getLatest(options?: RequestOptions): Promise<XKCDResultWithData>;
  public async getLatest(options: RequestOptions = {}): Promise<XKCDResult | XKCDResultWithData> {
    const url = `${this.options.apiUrl}/${this.JSON_INFO_FILE}`;
    const metaData = await this.apiClient.requestService.get<XKCDResult>(url);

    if (options.withData) {
      const imageData = await this.getImage(metaData.img);
      return {
        ...metaData,
        data: imageData,
      };
    }

    return metaData;
  }

  /**
   * Get a comic by index.
   * @param index Index number
   * @param options Request options
   */
  public async getByIndex(index: number, options: {withData: true}): Promise<XKCDResultWithData>;
  public async getByIndex(index: number, options?: RequestOptions): Promise<XKCDResultWithData>;
  public async getByIndex(index: number, options: RequestOptions = {}): Promise<XKCDResultWithData | XKCDResult> {
    if (index < this.lowestIndex) {
      throw new Error(`Index is lower than the lowest index of ${this.lowestIndex}.`);
    }

    const url = `${this.options.apiUrl}/${index}/${this.JSON_INFO_FILE}`;

    const metaData = await this.apiClient.requestService.get<XKCDResult>(url);

    if (options.withData === true) {
      const imageData = await this.getImage(metaData.img);
      return {
        ...metaData,
        data: imageData,
      };
    }

    return metaData;
  }

  private async getImage(imageUrl: string): Promise<ImageData> {
    const {data, headers} = await this.apiClient.requestService.request<Buffer>({
      responseType: 'arraybuffer',
      url: imageUrl,
    });

    const contentType = headers['content-type'];

    return {
      data,
      mimeType: contentType ? String(contentType) : undefined,
    };
  }
}
