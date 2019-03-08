import {UpdownIO} from '../src';
import * as nock from 'nock';

describe('RequestService', () => {
  let updownIO: UpdownIO;

  beforeEach(() => (updownIO = new UpdownIO('my-api-key')));

  it('uses the correct API key', async () => {
    const myApiKey = 'my-new-api-key';

    updownIO = new UpdownIO(myApiKey);

    nock('https://updown.io')
      .get('/api/checks/')
      .query((queryObject: {'api-key': string}) => {
        expect(queryObject['api-key']).toBe(myApiKey);
        return true;
      })
      .reply(
        200,
        {},
        {
          'Content-Type': 'application/json',
        }
      );

    await updownIO.api.checks.getChecks();
  });

  it('wraps custom headers correctly', async () => {
    const customHeaders = {
      'X-My-Header': '12345',
    };

    nock('https://updown.io')
      .post('/api/checks/')
      .query((queryObject: {custom_headers: {'X-My-Header': string}}) => {
        expect(queryObject.custom_headers).toEqual(customHeaders);
        return true;
      })
      .reply(
        200,
        {},
        {
          'Content-Type': 'application/json',
        }
      );

    await updownIO.api.checks.addCheck('https://example.com', {
      customHeaders,
    });
  });

  it('wraps locations correctly', async () => {
    const disabledLocations = ['lan', 'mia'];

    nock('https://updown.io')
      .post('/api/checks/')
      .query((queryObject: {disabled_locations: string[]}) => {
        expect(queryObject.disabled_locations).toEqual(disabledLocations);
        return true;
      })
      .reply(
        200,
        {},
        {
          'Content-Type': 'application/json',
        }
      );

    await updownIO.api.checks.addCheck('https://example.com', {
      disabledLocations,
    });
  });
});
