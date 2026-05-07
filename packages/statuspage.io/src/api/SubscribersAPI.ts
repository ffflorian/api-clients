import type {APIClient} from '@ffflorian/api-client';

import type {
  CombinedSubscriberData,
  ComponentSubscriberData,
  EmailSubscriberData,
  IncidentSubscriberData,
  PhoneSubscriberData,
  WebhookSubscriberData,
} from '../interfaces/Request';
import type {CombinedSubscriber, EmailSubscriber, PhoneSubscriber, WebhookSubscriber} from '../interfaces/Result';

import {Endpoint} from '../Endpoints';

export class SubscribersAPI {
  private readonly apiClient: APIClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  public async createComponentSubscription(
    emailSubscriber: ComponentSubscriberData & EmailSubscriberData
  ): Promise<EmailSubscriber>;
  public async createComponentSubscription(
    smsSubscriber: ComponentSubscriberData & PhoneSubscriberData
  ): Promise<PhoneSubscriber>;
  public async createComponentSubscription(
    webhookSubscriber: ComponentSubscriberData & WebhookSubscriberData
  ): Promise<WebhookSubscriber>;
  public async createComponentSubscription(
    subscriberData: CombinedSubscriberData & ComponentSubscriberData
  ): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    const {data} = await this.apiClient.post(endpoint, {subscriber: subscriberData});
    return data;
  }

  /**
   * When an incident is created, a subscriber can be associated
   * to that incident to receive notifications on updates until the
   * incident is resolved. The incident must be in an unresolved
   * state to subscribe to it.
   */
  public async createIncidentSubscription(
    emailSubscriber: EmailSubscriberData & IncidentSubscriberData
  ): Promise<EmailSubscriber>;
  public async createIncidentSubscription(
    smsSubscriber: IncidentSubscriberData & PhoneSubscriberData
  ): Promise<PhoneSubscriber>;
  public async createIncidentSubscription(
    webhookSubscriber: IncidentSubscriberData & WebhookSubscriberData
  ): Promise<WebhookSubscriber>;
  public async createIncidentSubscription(
    subscriberData: CombinedSubscriberData & IncidentSubscriberData
  ): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    const {data} = await this.apiClient.post(endpoint, {subscriber: subscriberData});
    return data;
  }

  /**
   * A page subscriber is by default subscribed to all incidents associated with a page.
   */
  public async createPageSubscription(emailSubscriber: EmailSubscriberData): Promise<EmailSubscriber>;
  public async createPageSubscription(smsSubscriber: PhoneSubscriberData): Promise<PhoneSubscriber>;
  public async createPageSubscription(webhookSubscriber: WebhookSubscriberData): Promise<WebhookSubscriber>;
  public async createPageSubscription(subscriptionData: CombinedSubscriberData): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    const {data} = await this.apiClient.post(endpoint, {subscriber: subscriptionData});
    return data;
  }

  /**
   * @param subscriberId The subscriber ID.
   */
  public async getSubscription(subscriberId: string): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    const {data} = await this.apiClient.get(endpoint, {params: {subscriber: {id: subscriberId}}});
    return data;
  }

  /**
   * To cancel a subscription, you need to submit a 'DELETE' request with the the subscription id.
   */
  public async removeSubscription(subscriberId: string): Promise<boolean> {
    const endpoint = Endpoint.subscriber(subscriberId);
    const {data} = await this.apiClient.delete(endpoint);
    return data;
  }
}
