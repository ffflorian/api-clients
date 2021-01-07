import axios, {AxiosInstance} from 'axios';
import * as qs from 'qs';

import {Endpoint} from './Endpoints';
import type {API, Image, ImageCaptionOptions, Memes, Response} from './interfaces';

export class Imgflip {
  private static readonly BASE_URL = 'https://api.imgflip.com';
  public readonly api: API;
  private readonly apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: Imgflip.BASE_URL,
      paramsSerializer: params => qs.stringify(params, {arrayFormat: 'brackets'}),
    });

    this.api = {
      captionImage: this.captionImage,
      getMemes: this.getMemes,
    };
  }

  private readonly captionImage = async (options: ImageCaptionOptions): Promise<Response<Image>> => {
    const endpoint = Endpoint.captionImage();
    const {data} = await this.apiClient.request({params: options, url: endpoint});
    return data;
  };

  private readonly getMemes = async (): Promise<Response<Memes>> => {
    const endpoint = Endpoint.getMemes();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  };
}
