import type {ImageData, RequestOptions, XKCDResult, XKCDResultWithData} from './Interfaces';

export class XKCDAPI {
  private readonly JSON_INFO_FILE: string;
  private readonly lowestIndex: number;

  constructor(private readonly baseURL: string) {
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

    const response = await fetch(new URL(`/${index}/${this.JSON_INFO_FILE}`, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    const metadata = await response.json() as XKCDResult;

    if (options.withData === true) {
      const imageData = await this.getImage(metadata.img);
      return {
        ...metadata,
        data: imageData,
      };
    }

    return metadata;
  }

  /**
   * Get the latest comic.
   * @param options Request options
   */
  public async getLatest(options: {withData: true}): Promise<XKCDResultWithData>;
  public async getLatest(options?: RequestOptions): Promise<XKCDResultWithData>;
  public async getLatest(options: RequestOptions = {}): Promise<XKCDResult | XKCDResultWithData> {
    const response = await fetch(new URL(`/${this.JSON_INFO_FILE}`, this.baseURL));
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    const metadata = await response.json() as XKCDResult;

    if (options.withData) {
      const imageData = await this.getImage(metadata.img);
      return {
        ...metadata,
        data: imageData,
      };
    }

    return metadata;
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
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    const data = await response.arrayBuffer().then(buffer => Buffer.from(buffer));

    const contentType = response.headers.get('content-type');

    return {
      data,
      mimeType: contentType ? String(contentType) : undefined,
    };
  }
}
