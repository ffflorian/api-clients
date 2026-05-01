import type {APIClient} from '@ffflorian/api-client';

import type {ClientOptions, MeshFirmware, MeshListResponse, MeshMap, MeshMessage} from '../interfaces';

import {Endpoint} from '../Endpoints';
import {APIBase} from './APIBase';

export class MeshAPI extends APIBase {
  constructor(apiClient: APIClient, options: ClientOptions) {
    super(apiClient, options);
  }

  public async getFirmwareById(firmwareId: number): Promise<MeshFirmware> {
    const endpoint = Endpoint.Mesh.firmwareById(firmwareId);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async getMap(levelId: number): Promise<MeshMap> {
    const endpoint = Endpoint.Mesh.map(levelId);
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  public async listFirmwares(limit?: number, offset?: number): Promise<MeshListResponse<MeshFirmware>> {
    const params = new URLSearchParams();
    if (limit !== undefined) {
      params.set('limit', String(limit));
    }
    if (offset !== undefined) {
      params.set('offset', String(offset));
    }

    const endpoint = Endpoint.Mesh.firmwares();
    const requestPath = params.size > 0 ? `${endpoint}?${params.toString()}` : endpoint;
    const {data} = await this.apiClient.get(requestPath);
    return data;
  }

  public async listMessages(limit?: number, offset?: number): Promise<MeshListResponse<MeshMessage>> {
    const params = new URLSearchParams();
    if (limit !== undefined) {
      params.set('limit', String(limit));
    }
    if (offset !== undefined) {
      params.set('offset', String(offset));
    }

    const endpoint = Endpoint.Mesh.messages();
    const requestPath = params.size > 0 ? `${endpoint}?${params.toString()}` : endpoint;
    const {data} = await this.apiClient.get(requestPath);
    return data;
  }
}
