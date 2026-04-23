import type {APIClient} from '@ffflorian/api-client';

import type {
  Bounds,
  ClientOptions,
  MapLegend,
  MapLocation,
  MapLocationDisplay,
  MapLocationGeometry,
  MapLocationOptions,
  MapLocationQueryOptions,
  MapSettings,
  Position,
  Projection,
  Quest,
} from '../interfaces/';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class MapAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  /** /bounds/ returns the maximum bounds of the map */
  public async getBounds(): Promise<Bounds> {
    const endpoint = Endpoint.Map.bounds();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getLegend(themeId: number | string): Promise<MapLegend> {
    const endpoint = Endpoint.Map.legend(themeId);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getLoad(): Promise<Record<string, number>> {
    const endpoint = Endpoint.Map.load();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getLocation(idOrSlug: number | string, options: MapLocationOptions = {}): Promise<MapLocation> {
    const params = new URLSearchParams();
    if (options.geometry !== undefined) {
      params.set('geometry', String(options.geometry));
    }
    if (options.showRedirects !== undefined) {
      params.set('show_redirects', String(options.showRedirects));
    }

    const endpoint =
      typeof idOrSlug === 'string'
        ? Endpoint.Map.locationBySlug(idOrSlug, options.full)
        : Endpoint.Map.locationById(idOrSlug, options.full);
    const requestPath = params.size > 0 ? `${endpoint}?${params.toString()}` : endpoint;
    const {data} = await this.apiClient.get(requestPath);
    return data;
  }

  public async getLocationDisplay(idOrSlug: number | string): Promise<MapLocationDisplay> {
    const endpoint =
      typeof idOrSlug === 'string'
        ? Endpoint.Map.locationDisplayBySlug(idOrSlug)
        : Endpoint.Map.locationDisplayById(idOrSlug);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getLocationGeometry(idOrSlug: number | string): Promise<MapLocationGeometry> {
    const endpoint =
      typeof idOrSlug === 'string'
        ? Endpoint.Map.locationGeometryBySlug(idOrSlug)
        : Endpoint.Map.locationGeometryById(idOrSlug);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getLocations(options: MapLocationQueryOptions = {}): Promise<MapLocation[]> {
    const params = new URLSearchParams();
    if (options.geometry !== undefined) {
      params.set('geometry', String(options.geometry));
    }
    if (options.searchable !== undefined) {
      params.set('searchable', String(options.searchable));
    }

    const endpoint = Endpoint.Map.locations(false);
    const requestPath = params.size > 0 ? `${endpoint}?${params.toString()}` : endpoint;
    const {data} = await this.apiClient.get(requestPath);
    return data;
  }

  public async getLocationsFull(options: MapLocationQueryOptions = {}): Promise<MapLocation[]> {
    const params = new URLSearchParams();
    if (options.geometry !== undefined) {
      params.set('geometry', String(options.geometry));
    }
    if (options.searchable !== undefined) {
      params.set('searchable', String(options.searchable));
    }

    const endpoint = Endpoint.Map.locations(true);
    const requestPath = params.size > 0 ? `${endpoint}?${params.toString()}` : endpoint;
    const {data} = await this.apiClient.get(requestPath);
    return data;
  }

  public async getMyPositions(): Promise<Position[]> {
    const endpoint = Endpoint.Map.myPositions();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getPositionById(positionId: number | string): Promise<Position> {
    const endpoint = Endpoint.Map.position(positionId);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getProjection(): Promise<Projection> {
    const endpoint = Endpoint.Map.projection();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getQuests(questType?: string, level?: number): Promise<Quest[]> {
    const params = new URLSearchParams();
    if (questType) {
      params.set('quest_type', questType);
    }
    if (level !== undefined) {
      params.set('level', String(level));
    }

    const endpoint = Endpoint.Map.quests();
    const requestPath = params.size > 0 ? `${endpoint}?${params.toString()}` : endpoint;
    const {data} = await this.apiClient.get(requestPath);
    return data;
  }

  public async getSettings(): Promise<MapSettings> {
    const endpoint = Endpoint.Map.settings();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getWifiData(): Promise<Record<string, unknown>> {
    const endpoint = Endpoint.Map.wifidata();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async setPosition(
    positionId: number | string,
    coordinatesId: null | string,
    timeout?: null | number
  ): Promise<Position> {
    const endpoint = Endpoint.Map.position(positionId);
    const {data} = await this.apiClient.put(endpoint, {
      coordinates_id: coordinatesId,
      timeout,
    });
    return data;
  }

  public async updateLoad(aps: Record<string, number>): Promise<void> {
    const endpoint = Endpoint.Map.load();
    await this.apiClient.post(endpoint, {aps});
  }
}
