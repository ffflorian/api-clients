import nock from 'nock';
import {beforeEach, describe, expect, it} from 'vitest';

import {ICanHazDadJoke} from './';

const jokeResponse = {
  id: 'R7UfaahVfFd',
  joke: 'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.',
  status: 200,
};

const slackResponse = {
  attachments: [
    {
      fallback: jokeResponse.joke,
      footer: ' - ',
      text: jokeResponse.joke,
    },
  ],
  response_type: 'in_channel',
  username: 'icanhazdadjoke',
};

const searchResponse = {
  current_page: 1,
  limit: 5,
  next_page: 1,
  previous_page: 1,
  results: [jokeResponse],
  search_term: 'dog',
  status: 200,
  total_jokes: 1,
  total_pages: 1,
};

const graphQLResponse = {
  data: {
    joke: {
      id: jokeResponse.id,
      joke: jokeResponse.joke,
      permalink: `https://icanhazdadjoke.com/j/${jokeResponse.id}`,
    },
  },
};

const imageData = Buffer.from('AQID', 'base64');

describe('ICanHazDadJokeAPI', () => {
  let iCanHazDadJoke: ICanHazDadJoke;

  beforeEach(() => {
    iCanHazDadJoke = new ICanHazDadJoke();
    nock.cleanAll();

    nock('https://icanhazdadjoke.com').get('/').reply(jokeResponse.status, jokeResponse).persist();

    nock('https://icanhazdadjoke.com').get(`/j/${jokeResponse.id}`).reply(jokeResponse.status, jokeResponse).persist();

    nock('https://icanhazdadjoke.com')
      .get(`/j/${jokeResponse.id}.png`)
      .reply(jokeResponse.status, imageData, {
        'content-type': 'image/png',
      })
      .persist();

    nock('https://icanhazdadjoke.com')
      .get('/search')
      .query({
        limit: 5,
        page: 1,
        term: 'dog',
      })
      .reply(searchResponse.status, searchResponse)
      .persist();

    nock('https://icanhazdadjoke.com').get('/slack').reply(jokeResponse.status, slackResponse).persist();

    nock('https://icanhazdadjoke.com')
      .post('/graphql', {
        query: 'query { joke { id joke permalink } }',
      })
      .reply(jokeResponse.status, graphQLResponse)
      .persist();
  });

  it('gets a random dad joke', async () => {
    const random = await iCanHazDadJoke.api.getRandom();

    expect(random).toMatchObject(jokeResponse);
  });

  it('gets a random dad joke with image', async () => {
    const randomWithImage = await iCanHazDadJoke.api.getRandom({withImage: true});
    const image = Buffer.isBuffer(randomWithImage.image)
      ? randomWithImage.image
      : Buffer.from(randomWithImage.image as unknown as ArrayBuffer);

    expect(randomWithImage).toMatchObject(jokeResponse);
    expect(image).toEqual(imageData);
  });

  it('gets a dad joke by id', async () => {
    const byId = await iCanHazDadJoke.api.getById(jokeResponse.id);

    expect(byId).toMatchObject(jokeResponse);
  });

  it('searches for jokes with query params', async () => {
    const search = await iCanHazDadJoke.api.search('dog', {limit: 5, page: 1});

    expect(search).toMatchObject(searchResponse);
    expect(search.results).toHaveLength(1);
  });

  it('rejects search limit values greater than 30', async () => {
    await expect(iCanHazDadJoke.api.search('dog', {limit: 31})).rejects.toThrow(
      'The search limit must be between 1 and 30, got 31.'
    );
  });

  it('gets a random dad joke formatted for Slack', async () => {
    const slack = await iCanHazDadJoke.api.getSlack();

    expect(slack).toMatchObject(slackResponse);
  });

  it('executes a GraphQL query', async () => {
    const result = await iCanHazDadJoke.api.graphql('query { joke { id joke permalink } }');

    expect(result).toMatchObject(graphQLResponse);
  });
});
