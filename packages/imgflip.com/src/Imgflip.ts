import * as qs from 'qs';

import {Endpoint} from './Endpoints';
import type {API, Image, ImageCaptionOptions, Memes, Response} from './interfaces';

export class Imgflip {
  private static readonly BASE_URL = 'https://api.imgflip.com';
  public readonly api: API;
  private baseURL: string;

  constructor(apiUrl?: string) {
    this.baseURL = apiUrl || Imgflip.BASE_URL,

    this.api = {
      captionImage: this.captionImage,
      getMemes: this.getMemes,
    };
  }

  private readonly captionImage = async (params: ImageCaptionOptions): Promise<Response<Image>> => {
    const endpoint = Endpoint.captionImage();
    const config = {
      data: qs.stringify(params, {arrayFormat: 'indices'}),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'post',
      url: endpoint,
    };
    const response = await fetch(new URL(endpoint, this.baseURL), config);
    return response.json();
  };

  private readonly getMemes = async (): Promise<Response<Memes>> => {
    const endpoint = Endpoint.getMemes();
    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  };

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.baseURL = newUrl;
  }
}
