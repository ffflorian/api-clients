import {URL} from 'url';
import {RequestOptions, XKCDResult, XKCDResultWithData} from './Interfaces';
import {RequestService} from './RequestService';

export class XKCD {
  private readonly lowestIndex = 1;
  private readonly requestService: RequestService;

  constructor() {
    this.requestService = new RequestService();
  }

  /**
   * Get a random comic.
   * @param options Request options
   */
  public async getRandom(options: {withData: true}): Promise<XKCDResultWithData>;
  public async getRandom(options?: RequestOptions): Promise<XKCDResultWithData>;
  public async getRandom(options: RequestOptions = {}): Promise<XKCDResult | XKCDResultWithData> {
    const latest = await this.requestService.getLatest();
    const randomIndex = Math.floor(Math.random() * (latest.num - this.lowestIndex + 1)) + this.lowestIndex;

    const metaData = await this.requestService.getByIndex(randomIndex);

    if (options.withData === true) {
      const imageData = await this.requestService.getImage(metaData.img);
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
    const metaData = await this.requestService.getLatest();

    if (options.withData === true) {
      const imageData = await this.requestService.getImage(metaData.img);
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

    const metaData = await this.requestService.getByIndex(index);

    if (options.withData === true) {
      const imageData = await this.requestService.getImage(metaData.img);
      return {
        ...metaData,
        data: imageData,
      };
    }

    return metaData;
  }

  /**
   * Set a new API URL.
   * @param url The new API URL.
   */
  public setApiUrl(newUrl: URL): void {
    this.requestService.setApiUrl(newUrl);
  }
}
