import nock from 'nock';
import * as qs from 'qs';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

import {Imgflip} from './Imgflip';

const HTTP_OK = 200;
const HTTP_NOT_FOUND = 404;

describe('Imgflip', () => {
  let imgflip: Imgflip;

  beforeEach(() => {
    imgflip = new Imgflip();
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it('gets memes without filter', async () => {
    const responseData = {
      data: {
        memes: [
          {
            box_count: 2,
            height: 335,
            id: '61579',
            name: 'One Does Not Simply',
            url: 'https://i.imgflip.com/1bij.jpg',
            width: 568,
          },
        ],
      },
      success: true,
    } as const;

    nock('https://api.imgflip.com').get('/get_memes').reply(HTTP_OK, responseData);

    const response = await imgflip.api.getMemes();

    expect(response).toEqual(responseData);
  });

  it('gets memes with type filter', async () => {
    const responseData = {
      data: {
        memes: [],
      },
      success: true,
    } as const;

    nock('https://api.imgflip.com').get('/get_memes').query({type: 'gif,image'}).reply(HTTP_OK, responseData);

    const response = await imgflip.api.getMemes({type: ['gif', 'image']});

    expect(response).toEqual(responseData);
  });

  it('posts caption request with text fields', async () => {
    const responseData = {
      data: {
        page_url: 'https://imgflip.com/i/123abc',
        url: 'https://i.imgflip.com/123abc.jpg',
      },
      success: true,
    } as const;

    nock('https://api.imgflip.com')
      .post('/caption_image', body => {
        const parsed = qs.parse(body as string);
        expect(parsed).toMatchObject({
          password: 'secret-password',
          template_id: '438680',
          text0: 'Top text',
          text1: 'Bottom text',
          username: 'myUser',
        });
        return true;
      })
      .matchHeader('content-type', value => value.includes('application/x-www-form-urlencoded'))
      .reply(HTTP_OK, responseData);

    const response = await imgflip.api.captionImage({
      password: 'secret-password',
      template_id: '438680',
      text0: 'Top text',
      text1: 'Bottom text',
      username: 'myUser',
    });

    expect(response).toEqual(responseData);
  });

  it('posts caption request with indexed boxes', async () => {
    const responseData = {
      data: {
        page_url: 'https://imgflip.com/i/987def',
        url: 'https://i.imgflip.com/987def.jpg',
      },
      success: true,
    } as const;

    nock('https://api.imgflip.com')
      .post('/caption_image', body => {
        const parsed = qs.parse(body as string);
        expect(parsed).toMatchObject({
          /* eslint-disable id-length */
          boxes: [
            {
              text: 'Top box',
              x: '10',
              y: '20',
            },
            {
              text: 'Bottom box',
            },
          ],
          /* eslint-enable id-length */
          password: 'secret-password',
          template_id: '112126428',
          username: 'myUser',
        });
        return true;
      })
      .reply(HTTP_OK, responseData);

    const response = await imgflip.api.captionImage({
      /* eslint-disable id-length */
      boxes: [
        {
          text: 'Top box',
          x: 10,
          y: 20,
        },
        {
          text: 'Bottom box',
        },
      ],
      /* eslint-enable id-length */
      password: 'secret-password',
      template_id: '112126428',
      username: 'myUser',
    });

    expect(response).toEqual(responseData);
  });

  it('sets a new base URL', async () => {
    imgflip.setApiUrl('https://example.com');

    nock('https://example.com').get('/get_memes').reply(HTTP_NOT_FOUND, {error: 'Not found'});

    await expect(imgflip.api.getMemes()).rejects.toThrow('Request failed with status code 404');
  });
});
