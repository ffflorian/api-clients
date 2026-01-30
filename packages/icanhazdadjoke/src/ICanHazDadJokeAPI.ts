import type {APIClient} from '@ffflorian/api-client';

import type {
  ClientOptions,
  JokeResult,
  JokeResultWithImage,
  JokeSearchResult,
  RequestOptions,
  SearchOptions,
} from './Interfaces';

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
   * Search for dad jokes.
   * @param term search term to use (default: list all jokes)
   * @see https://icanhazdadjoke.com/api#search-for-dad-jokes
   */
  public async search(options: SearchOptions): Promise<JokeSearchResult>;
  public async search(query: string, options?: Omit<SearchOptions, 'term'>): Promise<JokeSearchResult>;
  public async search(query?: SearchOptions | string, options: SearchOptions = {}): Promise<JokeSearchResult> {
    if (typeof query === 'string') {
      options.term = query;
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
