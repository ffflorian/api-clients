import * as librariesIO from '../src';
import {RequestService} from '../src/RequestService';

describe('Endpoint', () => {
  it('concats platform and name', () => {
    const options: librariesIO.SearchOptions = {
      filter: {
        keywords: ['key1', 'key2'],
      },
      page: 2,
      perPage: 10,
      sortBy: 'created_at',
    };

    const mappedParameters = RequestService['mapParameters'](options);
    expect(mappedParameters).toEqual(
      jasmine.objectContaining<any>({
        keywords: 'key1,key2',
        page: 2,
        per_page: 10,
        sort: 'created_at',
      })
    );
  });
});
