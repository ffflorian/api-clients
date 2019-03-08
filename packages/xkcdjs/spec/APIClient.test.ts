import * as XKCDJS from '../src';
import * as nock from 'nock';
import {URL} from 'url';

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
      .reply(200, responseDataFirst)
      .persist();

    nock('https://xkcd.com')
      .get('/info.0.json')
      .reply(200, responseDataLatest)
      .persist();

    nock('https://imgs.xkcd.com/')
      .get(/.*/)
      .reply(200, Buffer.from([]), {
        'content-type': 'image/png',
      })
      .persist();

    nock('https://example.com')
      .get(/.*/)
      .reply(404)
      .persist();
  });

  it('gets the latest comic', async () => {
    const latest = await xkcdJS.getLatest();

    expect(latest.alt).toBe(responseDataLatest.alt);
  });

  it('gets a random comic', async () => {
    const random = await xkcdJS.getRandom();

    expect(random.alt).toBe(responseDataFirst.alt);
  });

  it('gets a comic by id', async () => {
    const byIndex = await xkcdJS.getByIndex(1);

    expect(byIndex.alt).toBe(responseDataFirst.alt);
  });

  it('gets the image data', async () => {
    const latestWithData = await xkcdJS.getLatest({withData: true});

    expect(latestWithData.data).toEqual(
      jasmine.objectContaining<any>({
        data: jasmine.any(Buffer),
      })
    );
  });

  it('sets the base URL', async () => {
    xkcdJS.setApiUrl(new URL('https://example.com'));

    try {
      await xkcdJS.getByIndex(1);
      fail('Did not throw error');
    } catch (error) {
      expect(error.message).toBe('Request failed with status code 404');
    }
  });
});
