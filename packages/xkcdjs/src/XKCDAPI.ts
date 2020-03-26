import type {AxiosInstance} from 'axios';
import type {ClientOptions, ImageData, RequestOptions, XKCDResult, XKCDResultWithData} from './Interfaces';

export class XKCDAPI {
  protected readonly apiClient: AxiosInstance;
  protected readonly options: ClientOptions;
  private readonly JSON_INFO_FILE: string;
  private readonly lowestIndex: number;

  constructor(apiClient: AxiosInstance, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;

    this.lowestIndex = 1;
    this.JSON_INFO_FILE = 'info.0.json';
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

    const {data: metaData} = await this.apiClient.get<XKCDResult>(`/${index}/${this.JSON_INFO_FILE}`);

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
    const {data: metaData} = await this.apiClient.get<XKCDResult>(`/${this.JSON_INFO_FILE}`);

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

  private async getImage(imageUrl: string): Promise<ImageData> {
    const {data, headers} = await this.apiClient.request<Buffer>({
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
