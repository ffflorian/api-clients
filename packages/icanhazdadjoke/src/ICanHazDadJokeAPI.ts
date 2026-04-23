import type {APIClient} from '@ffflorian/api-client';

import type {
  ClientOptions,
  GraphQLResponse,
  JokeResult,
  JokeResultWithImage,
  JokeSearchResult,
  RequestOptions,
  SearchOptions,
  SlackJokeResult,
} from './Interfaces';

const MIN_SEARCH_LIMIT = Number.parseInt('1');
const MAX_SEARCH_LIMIT = Number.parseInt('30');

export class ICanHazDadJokeAPI {
  protected readonly apiClient: APIClient;
  protected readonly options: ClientOptions;

  constructor(apiClient: APIClient, options: ClientOptions) {
    this.apiClient = apiClient;
    this.options = options;
  }

  /**
   * Fetch a dad joke by ID.
   * @see https://icanhazdadjoke.com/api#fetch-a-dad-joke
   */
  public getById(id: string, options: {withImage: true}): Promise<JokeResultWithImage>;
  public getById(id: string, options?: RequestOptions): Promise<JokeResult>;
  public getById(id: string, options: RequestOptions = {}): Promise<JokeResult | JokeResultWithImage> {
    return this.getByID(id, options);
  }

  /**
   * Fetch a dad joke by ID.
   * @see https://icanhazdadjoke.com/api#fetch-a-dad-joke
   */
  public async getByID(id: string, options: {withImage: true}): Promise<JokeResultWithImage>;
  public async getByID(id: string, options?: RequestOptions): Promise<JokeResult>;
  public async getByID(id: string, options: RequestOptions = {}): Promise<JokeResult | JokeResultWithImage> {
    const {data: metaData} = await this.apiClient.get<JokeResult>(`/j/${id}`);

    if (options.withImage) {
      const imageData = await this.getImage(`/j/${id}.png`);
      return {
        ...metaData,
        image: imageData,
      };
    }

    return metaData;
  }

  /**
   * Fetch a random dad joke.
   * @see https://icanhazdadjoke.com/api#fetch-a-random-dad-joke
   */
  public async getRandom(options: {withImage: true}): Promise<JokeResultWithImage>;
  public async getRandom(options?: RequestOptions): Promise<JokeResult>;
  public async getRandom(options: RequestOptions = {}): Promise<JokeResult | JokeResultWithImage> {
    const {data: metaData} = await this.apiClient.get<JokeResult>('/');

    if (options.withImage) {
      const imageData = await this.getImage(`/j/${metaData.id}.png`);
      return {
        ...metaData,
        image: imageData,
      };
    }

    return metaData;
  }

  /**
   * Fetch a random dad joke as a Slack message.
   * @see https://icanhazdadjoke.com/api#fetch-a-random-dad-joke-as-a-slack-message
   */
  public async getSlack(): Promise<SlackJokeResult> {
    const {data} = await this.apiClient.get<SlackJokeResult>('/slack');
    return data;
  }

  /**
   * Execute a GraphQL query.
   * @see https://icanhazdadjoke.com/api#graphql
   */
  public async graphql(query: string): Promise<GraphQLResponse> {
    const {data} = await this.apiClient.post<GraphQLResponse>('/graphql', {query});
    return data;
  }

  /**
   * Search for dad jokes.
   * @param options Search options (default: list all jokes)
   * @see https://icanhazdadjoke.com/api#search-for-dad-jokes
   */
  public async search(options: SearchOptions): Promise<JokeSearchResult>;
  public async search(query: string, options?: Omit<SearchOptions, 'term'>): Promise<JokeSearchResult>;
  public async search(query?: SearchOptions | string, options: SearchOptions = {}): Promise<JokeSearchResult> {
    if (typeof query === 'string') {
      options.term = query;
    }

    if (options.limit !== undefined && (options.limit < MIN_SEARCH_LIMIT || options.limit > MAX_SEARCH_LIMIT)) {
      throw new Error(
        `The search limit must be between ${MIN_SEARCH_LIMIT} and ${MAX_SEARCH_LIMIT}, got ${options.limit}.`
      );
    }

    const {data} = await this.apiClient.get<JokeSearchResult>('/search', {
      params: options,
    });

    return data;
  }

  private async getImage(imageUrl: string): Promise<Buffer> {
    const {data} = await this.apiClient.get<Buffer>(imageUrl, {
      headers: {
        Accept: 'image/png',
      },
      responseType: 'arraybuffer',
    });

    return data;
  }
}
