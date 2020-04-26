import axios, {AxiosInstance} from 'axios';

import {Endpoint} from './Endpoints';
import type {API, Image, ImageCaptionOptions, Meme, Response} from './interfaces';

export class Imgflip {
  private static readonly BASE_URL = 'https://api.imgflip.com';
  public readonly api: API;
  private readonly apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: Imgflip.BASE_URL,
    });

    this.api = {
      captionImage: this.captionImage,
      getMemes: this.getMemes,
    };
  }

  /**
   * Add a caption to an Imgflip meme template.
   * Images created with this API will be publicly accessible by anyone
   * through the url in the response - there is no "private" option.
   * This does not mean these memes will be posted publicly though,
   * one still needs to know the exact URL to find the image.
   * If the image hangs around on Imgflip servers for a while and
   * gets very few views (direct image views and image page views both
   * count), it will be auto-deleted to save space.
   */
  private readonly captionImage = async (options: ImageCaptionOptions): Promise<Response<Image>> => {
    const endpoint = Endpoint.captionImage();
    const {data} = await this.apiClient.post(endpoint, options);
    return data;
  };

  /**
   * Gets an array of popular memes that may be captioned with this API.
   * The size of this array and the order of memes may change at any time.
   */
  private readonly getMemes = async (): Promise<Response<Meme[]>> => {
    const endpoint = Endpoint.getMemes();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  };
}
