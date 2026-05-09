import type {APIClient} from '@ffflorian/api-client';

import type {Deleted, Recipient, RecipientOptions} from '../interfaces';

import {Endpoint} from '../Endpoints';

export class RecipientsAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  /** Add a new recipient. */
  public async addRecipient(options: RecipientOptions): Promise<Recipient> {
    const endpoint = Endpoint.recipients();
    const {data} = await this.apiClient.post(endpoint, options);
    return data;
  }

  /** Delete a recipient. */
  public async deleteRecipient(id: string): Promise<Deleted> {
    const endpoint = Endpoint.recipients(id);
    const {data} = await this.apiClient.delete(endpoint);
    return data;
  }

  /** List all possible alert recipients/channels on your account. */
  public async getRecipients(): Promise<Recipient[]> {
    const endpoint = Endpoint.recipients();
    const {data} = await this.apiClient.get(endpoint);
    return data;
  }

  /**
   * Set a new API URL.
   * @param newURL The new API url
   */
  public setApiUrl(newURL: string): void {
    this.apiClient.setBaseURL(newURL);
  }
}
