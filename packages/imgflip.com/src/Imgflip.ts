import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import * as qs from 'qs';

import {Endpoint} from './Endpoints';
import type {API, Image, ImageCaptionOptions, Memes, Response} from './interfaces';

export class Imgflip {
  private static readonly BASE_URL = 'https://api.imgflip.com';
  public readonly api: API;
  private readonly apiClient: AxiosInstance;

  constructor(apiUrl?: string) {
    this.apiClient = axios.create({
      baseURL: apiUrl || Imgflip.BASE_URL,
    });

    this.api = {
      captionImage: this.captionImage,
      getMemes: this.getMemes,
    };
  }

  private readonly captionImage = async (params: ImageCaptionOptions): Promise<Response<Image>> => {
    const endpoint = Endpoint.captionImage();
    const config: AxiosRequestConfig = {
      data: qs.stringify(params, {arrayFormat: 'indices'}),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'post',
      url: endpoint,
    };
    const {data} = await this.apiClient.request(config);
    return data;
  };

  private readonly getMemes = async (): Promise<Response<Memes>> => {
    const endpoint = Endpoint.getMemes();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  };

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: string): void {
    this.apiClient.defaults.baseURL = newUrl;
  }
}
