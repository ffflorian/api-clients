import {APIClient, type RequestOptions} from '@ffflorian/api-client';
import * as qs from 'qs';

import {Endpoint} from './Endpoints';
import type {API, Image, ImageCaptionOptions, Memes, Response} from './interfaces';

export class Imgflip {
  private static readonly BASE_URL = 'https://api.imgflip.com';
  public readonly api: API;
  private readonly apiClient: APIClient;

  constructor(apiUrl?: string) {
    this.apiClient = new APIClient(apiUrl || Imgflip.BASE_URL);

    this.api = {
      captionImage: this.captionImage,
      getMemes: this.getMemes,
    };
  }

  private readonly captionImage = async (params: ImageCaptionOptions): Promise<Response<Image>> => {
    const endpoint = Endpoint.captionImage();
    const config: RequestOptions = {
      data: qs.stringify(params, {arrayFormat: 'indices'}),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    };
    const response = await this.apiClient.request(endpoint, config);
    return response.json();
  };

  private readonly getMemes = async (): Promise<Response<Memes>> => {
    const endpoint = Endpoint.getMemes();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  };

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }
}
