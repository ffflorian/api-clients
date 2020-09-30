import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {Result, NewService, UpdateService} from '../interfaces';

export class ServiceService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  public async getService(): Promise<Result> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: '/service',
    };
    const response = await this.apiClient.request<Result>(config);
    return response.data;
  }

  public async postService(data?: NewService): Promise<Result> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: '/service',
    };
    const response = await this.apiClient.request<Result>(config);
    return response.data;
  }

  public async putService(data?: UpdateService): Promise<Result> {
    const config: AxiosRequestConfig = {
      data,
      method: 'put',
      url: '/service',
    };
    const response = await this.apiClient.request<Result>(config);
    return response.data;
  }
}
