import {APIClient} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {
  CombinedSubscriberData,
  ComponentSubscriberData,
  EmailSubscriberData,
  IncidentSubscriberData,
  PhoneSubscriberData,
  RequestOptions,
  WebhookSubscriberData,
} from '../interfaces/Request';
import {CombinedSubscriber, EmailSubscriber, PhoneSubscriber, WebhookSubscriber} from '../interfaces/Result';

export class SubscribersAPI {
  private readonly apiClient: APIClient<RequestOptions>;

  constructor(apiClient: APIClient<RequestOptions>) {
    this.apiClient = apiClient;
  }

  /**
   * @param options Subscriber options.
   */
  public createComponentSubscription(
    emailSubscriber: EmailSubscriberData & ComponentSubscriberData
  ): Promise<EmailSubscriber>;
  public createComponentSubscription(
    smsSubscriber: PhoneSubscriberData & ComponentSubscriberData
  ): Promise<PhoneSubscriber>;
  public createComponentSubscription(
    webhookSubscriber: WebhookSubscriberData & ComponentSubscriberData
  ): Promise<WebhookSubscriber>;
  public createComponentSubscription(
    data: CombinedSubscriberData & ComponentSubscriberData
  ): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    return this.apiClient.requestService.get(endpoint, {params: {subscriber: data}});
  }

  /**
   * @param options Subscriber options.
   */
  public getSubscription(subscriberId: string): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    return this.apiClient.requestService.get(endpoint, {params: {subscriber: {id: subscriberId}}});
  }

  /**
   * When an incident is created, a subscriber can be associated
   * to that incident to receive notifications on updates until the
   * incident is resolved. The incident must be in an unresolved
   * state to subscribe to it.
   * @param options Subscriber options.
   */
  public createIncidentSubscription(
    emailSubscriber: EmailSubscriberData & IncidentSubscriberData
  ): Promise<EmailSubscriber>;
  public createIncidentSubscription(
    smsSubscriber: PhoneSubscriberData & IncidentSubscriberData
  ): Promise<PhoneSubscriber>;
  public createIncidentSubscription(
    webhookSubscriber: WebhookSubscriberData & IncidentSubscriberData
  ): Promise<WebhookSubscriber>;
  public createIncidentSubscription(
    data: CombinedSubscriberData & IncidentSubscriberData
  ): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    return this.apiClient.requestService.get(endpoint, {params: {subscriber: data}});
  }

  /**
   * A page subscriber is by default subscribed to all incidents associated with a page.
   * @param options Subscriber options.
   */
  public createPageSubscription(emailSubscriber: EmailSubscriberData): Promise<EmailSubscriber>;
  public createPageSubscription(smsSubscriber: PhoneSubscriberData): Promise<PhoneSubscriber>;
  public createPageSubscription(webhookSubscriber: WebhookSubscriberData): Promise<WebhookSubscriber>;
  public createPageSubscription(data: CombinedSubscriberData): Promise<CombinedSubscriber> {
    const endpoint = Endpoint.subscribers();
    return this.apiClient.requestService.get(endpoint, {params: {subscriber: data}});
  }

  /**
   * To cancel a subscription, you need to submit a 'DELETE' request with the the subscription id.
   */
  public removeSubscription(subscriberId: string): Promise<boolean> {
    const endpoint = Endpoint.Incidents.all();
    return this.apiClient.requestService.delete(endpoint, {params: {subscriber: {id: subscriberId}}});
  }
}
