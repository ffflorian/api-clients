import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {URL} from 'url';

import {ImageData, XKCDResult} from './Interfaces';

export class RequestService {
  private static readonly JSON_INFO_FILE = 'info.0.json';
  private apiUrl = new URL('https://xkcd.com');

  constructor() {}

  private async request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    config = {
      method: 'get',
      ...config,
    };
    try {
      const response = await axios.request<T>(config);
      return response;
    } catch (error) {
      const {status: statusCode = 0, statusText = ''} = error.response || {};
      if (statusCode && statusText) {
        throw new Error(`Request failed with status code ${statusCode}: ${statusText}.`);
      }
      throw error;
    }
  }

  async getLatest(): Promise<XKCDResult> {
    const url = new URL(RequestService.JSON_INFO_FILE, this.apiUrl).href;
    const {data} = await this.request<XKCDResult>({
      url: url,
    });
    return data;
  }

  async getByIndex(index: number): Promise<XKCDResult> {
    const url = new URL(`${index}/${RequestService.JSON_INFO_FILE}`, this.apiUrl).href;
    const {data} = await this.request<XKCDResult>({
      url: url,
    });
    return data;
  }

  async getImage(imageUrl: string): Promise<ImageData> {
    const url = new URL(imageUrl).href;
    const {data, headers} = await this.request<Buffer>({
      responseType: 'arraybuffer',
      url,
    });

    const contentType = headers['content-type'];

    return {
      data,
      mimeType: contentType ? String(contentType) : undefined,
    };
  }

  setApiUrl(newUrl: URL): void {
    this.apiUrl = newUrl;
  }
}
