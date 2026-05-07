import type {APIClient} from '@ffflorian/api-client';

import type {PackageInfo} from '../interfaces/';

import {Endpoint} from '../Endpoints';

export class PackageAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  /**
   * Get various packages info.
   * @param packageNames The package names
   */
  public async multiPackageInfo(packageNames: string[]): Promise<Record<string, PackageInfo>> {
    const endpoint = Endpoint.Package.multiPackageInfo();

    const {data} = await this.apiClient.post(endpoint, packageNames);
    return data;
  }

  /**
   * Get package info.
   * @param packageName The package name
   */
  public async packageInfo(packageName: string): Promise<PackageInfo> {
    const endpoint = Endpoint.Package.packageInfo(packageName);

    const {data} = await this.apiClient.get(endpoint);
    return data;
  }
}
