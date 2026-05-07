import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, Editor, EditorBeaconsLookup, EditorGeometries, GeometryStyles} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class EditorAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public async getBeaconsLookup(): Promise<EditorBeaconsLookup> {
    const endpoint = Endpoint.Editor.beaconsLookup();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getBounds(): Promise<Editor> {
    const endpoint = Endpoint.Editor.bounds();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getById(_id: number): Promise<Editor> {
    return this.getBounds();
  }

  public async getGeometryStyles(): Promise<GeometryStyles> {
    const endpoint = Endpoint.Editor.geometryStyles();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getLevelGeometries(levelId: number | string, updateCacheKey?: string): Promise<EditorGeometries> {
    const endpoint = Endpoint.Editor.levelGeometries(levelId);
    const requestPath = updateCacheKey
      ? `${endpoint}?update_cache_key=${encodeURIComponent(updateCacheKey)}`
      : endpoint;
    const {data} = await this.apiClient.get(requestPath);
    return data;
  }

  public async getList(): Promise<Editor[]> {
    const bounds = await this.getBounds();
    return [bounds];
  }

  public async getSpaceGeometries(spaceId: number | string, updateCacheKey?: string): Promise<EditorGeometries> {
    const endpoint = Endpoint.Editor.spaceGeometries(spaceId);
    const requestPath = updateCacheKey
      ? `${endpoint}?update_cache_key=${encodeURIComponent(updateCacheKey)}`
      : endpoint;
    const {data} = await this.apiClient.get(requestPath);
    return data;
  }
}
