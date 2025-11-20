import * as qs from 'qs';

import {Endpoint} from './Endpoints';
import type {API, Image, ImageCaptionOptions, Memes, Response} from './interfaces';

export class Imgflip {
  private baseURL = 'https://api.imgflip.com';
  public readonly api: API;

  constructor(apiUrl?: string) {
    this.baseURL = apiUrl ?? this.baseURL;

    this.api = {
      captionImage: this.captionImage,
      getMemes: this.getMemes,
    };
  }

  private readonly captionImage = async (params: ImageCaptionOptions): Promise<Response<Image>> => {
    const endpoint = Endpoint.captionImage();
    const config: RequestInit = {
      body: qs.stringify(params, {arrayFormat: 'indices'}),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'post',
    };
    const response = await fetch(endpoint, config);
    if (!response.ok) {
      throw new Error(`Failed to caption image: ${response.statusText}`);
    }
    return response.json();
  };

  private readonly getMemes = async (): Promise<Response<Memes>> => {
    const endpoint = Endpoint.getMemes();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to retrieve memes: ${response.statusText}`);
    }
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
