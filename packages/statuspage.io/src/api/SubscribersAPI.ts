import type {AxiosInstance} from 'axios';

import {Endpoint} from '../Endpoints';
import type {
  CombinedSubscriberData,
  ComponentSubscriberData,
  EmailSubscriberData,
  IncidentSubscriberData,
  PhoneSubscriberData,
  WebhookSubscriberData,
} from '../interfaces/Request';
import type {CombinedSubscriber, EmailSubscriber, PhoneSubscriber, WebhookSubscriber} from '../interfaces/Result';

export class SubscribersAPI {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * @param options Subscriber options.
   */
  public async createComponentSubscription(
    emailSubscriber: EmailSubscriberData & ComponentSubscriberData
  ): Promise<EmailSubscriber>;
  public async createComponentSubscription(
    smsSubscriber: PhoneSubscriberData & ComponentSubscriberData
  ): Promise<PhoneSubscriber>;
  public async createComponentSubscription(
    webhookSubscriber: WebhookSubscriberData & ComponentSubscriberData
  ): Promise<WebhookSubscriber>;
  public async createComponentSubscription(
    subscriberData: CombinedSubscriberData & ComponentSubscriberData
  ): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    const {data} = await this.apiClient.get(endpoint, {params: {subscriber: subscriberData}});
    return data;
  }

  /**
   * When an incident is created, a subscriber can be associated
   * to that incident to receive notifications on updates until the
   * incident is resolved. The incident must be in an unresolved
   * state to subscribe to it.
   * @param options Subscriber options.
   */
  public async createIncidentSubscription(
    emailSubscriber: EmailSubscriberData & IncidentSubscriberData
  ): Promise<EmailSubscriber>;
  public async createIncidentSubscription(
    smsSubscriber: PhoneSubscriberData & IncidentSubscriberData
  ): Promise<PhoneSubscriber>;
  public async createIncidentSubscription(
    webhookSubscriber: WebhookSubscriberData & IncidentSubscriberData
  ): Promise<WebhookSubscriber>;
  public async createIncidentSubscription(
    subscriberData: CombinedSubscriberData & IncidentSubscriberData
  ): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    const {data} = await this.apiClient.get(endpoint, {params: {subscriber: subscriberData}});
    return data;
  }

  /**
   * A page subscriber is by default subscribed to all incidents associated with a page.
   * @param options Subscriber options.
   */
  public async createPageSubscription(emailSubscriber: EmailSubscriberData): Promise<EmailSubscriber>;
  public async createPageSubscription(smsSubscriber: PhoneSubscriberData): Promise<PhoneSubscriber>;
  public async createPageSubscription(webhookSubscriber: WebhookSubscriberData): Promise<WebhookSubscriber>;
  public async createPageSubscription(subscriptionData: CombinedSubscriberData): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    const {data} = await this.apiClient.get(endpoint, {params: {subscriber: subscriptionData}});
    return data;
  }

  /**
   * @param options Subscriber options.
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
    const endpoint = Endpoint.Incidents.all();
    const {data} = await this.apiClient.delete(endpoint, {params: {subscriber: {id: subscriberId}}});
    return data;
  }
}
