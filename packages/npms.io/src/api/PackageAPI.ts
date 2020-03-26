import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {PackageInfo} from '../interfaces/';

export class PackageAPI {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * Get various packages info.
   * @param packageNames The package names
   * @see https://api-docs.npms.io/#api-Package-GetMultiPackageInfo
   */
  public async multiPackageInfo(packageNames: string[]): Promise<Record<string, PackageInfo>> {
    const endpoint = Endpoint.Package.multiPackageInfo();

    const {data} = await this.apiClient.post(endpoint, packageNames);
    return data;
  }

  /**
   * Get package info.
   * @param packageName The package name
   * @see https://api-docs.npms.io/#api-Package-GetPackageInfo
   */
  public async packageInfo(packageName: string): Promise<PackageInfo> {
    const endpoint = Endpoint.Package.packageInfo(packageName);

    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
