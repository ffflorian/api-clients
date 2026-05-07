import type {APIClient} from '@ffflorian/api-client';

import type {Report, ReportPaginator} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class ReportsAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getReportObjects(reportId: string, options?: Record<string, unknown>): Promise<ReportPaginator> {
    const endpoint = Endpoint.Reports.reportObjects(reportId);
    const {data} = await this.apiClient.get<ReportPaginator>(endpoint, {params: options});
    return data;
  }

  async getReportsList(): Promise<Report[]> {
    const endpoint = Endpoint.Reports.reportsList();
    const {data} = await this.apiClient.get<Report[]>(endpoint);
    return data;
  }
}
