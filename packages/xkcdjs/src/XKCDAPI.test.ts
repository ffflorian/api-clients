import {describe, expect, it, beforeEach} from 'vitest';
import nock from 'nock';
import * as XKCDJS from '.';
import {StatusCodes as HTTP_STATUS} from 'http-status-codes';
import type {AxiosError} from 'axios';

const responseDataFirst: XKCDJS.XKCDResult = {
  alt: "Don't we all.",
  day: '1',
  img: 'https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg',
  link: '',
  month: '1',
  news: '',
  num: 1,
  safe_title: 'Barrel - Part 1',
  title: 'Barrel - Part 1',
  transcript:
    "[[A boy sits in a barrel which is floating in an ocean.]]\nBoy: I wonder where I'll float next?\n[[The barrel drifts into the distance. Nothing else can be seen.]]\n{{Alt: Don't we all.}}",
  year: '2006',
};

const responseDataLatest: XKCDJS.XKCDResult = {
  alt: "If you study graphs in which edges can link more than two nodes, you're more properly called a hyperedgelord.",
  day: '22',
  img: 'https://imgs.xkcd.com/comics/edgelord.png',
  link: '',
  month: '8',
  news: '',
  num: 2036,
  safe_title: 'Edgelord',
  title: 'Edgelord',
  transcript: '',
  year: '2018',
};

describe('XKCD', () => {
  let xkcdJS: XKCDJS.XKCD;

  beforeEach(() => {
    xkcdJS = new XKCDJS.XKCD();

    nock('https://xkcd.com')
      .get(/\/[0-9]+\/info\.0\.json/)
      .reply(HTTP_STATUS.OK, responseDataFirst)
      .persist();

    nock('https://xkcd.com').get('/info.0.json').reply(HTTP_STATUS.OK, responseDataLatest).persist();

    nock('https://imgs.xkcd.com/')
      .get(/.*/)
      .reply(HTTP_STATUS.OK, Buffer.from([]), {
        'content-type': 'image/png',
      })
      .persist();

    nock('https://example.com').get(/.*/).reply(HTTP_STATUS.NOT_FOUND).persist();
  });

  it('gets the latest comic', async () => {
    const latest = await xkcdJS.api.getLatest();

    expect(latest.alt).toBe(responseDataLatest.alt);
  });

  it('gets a random comic', async () => {
    const random = await xkcdJS.api.getRandom();

    expect(random.alt).toBe(responseDataFirst.alt);
  });

  it('gets a comic by id', async () => {
    const byIndex = await xkcdJS.api.getByIndex(1);

    expect(byIndex.alt).toBe(responseDataFirst.alt);
  });

  it('gets the image data', async () => {
    const latestWithData = await xkcdJS.api.getLatest({withData: true});

    console.log('latestWithData.data:', latestWithData.data);

    expect(latestWithData.data).toMatchObject({
      data: expect.any(Buffer),
    });
  });

  it('sets the base URL', async () => {
    xkcdJS.setApiUrl('https://example.com');

    try {
      await xkcdJS.api.getByIndex(1);
      expect.fail('Did not throw error');
    } catch (error) {
      console.error('Error:', error);
      expect((error as Error).message.includes('404: Not Found')).toBe(true);
    }
  });
});
