import {Endpoint} from '../Endpoints';
import type {PackageInfo} from '../interfaces/';

export class PackageAPI {
  constructor(private readonly baseURL: string) {
  }

  /**
   * Get various packages info.
   * @param packageNames The package names
   * @see https://api-docs.npms.io/#api-Package-GetMultiPackageInfo
   */
  public async multiPackageInfo(packageNames: string[]): Promise<Record<string, PackageInfo>> {
    const endpoint = Endpoint.Package.multiPackageInfo();


    const response = await fetch(new URL(endpoint, this.baseURL), {
      body: JSON.stringify(packageNames),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    return response.json();
  }

  /**
   * Get package info.
   * @param packageName The package name
   * @see https://api-docs.npms.io/#api-Package-GetPackageInfo
   */
  public async packageInfo(packageName: string): Promise<PackageInfo> {
    const endpoint = Endpoint.Package.packageInfo(packageName);

    const response = await fetch(new URL(endpoint, this.baseURL));
    return response.json();
  }
}
