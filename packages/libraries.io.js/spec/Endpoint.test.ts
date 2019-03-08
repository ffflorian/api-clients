import {Endpoint} from '../src/Endpoints';

describe('Endpoint', () => {
  it('concats platform and name', () => {
    const platform = 'npm';
    const name = 'grunt';

    const endpoint = Endpoint.Project.contributors(platform, name);
    expect(endpoint).toBe('/npm/grunt/contributors/');
  });
});
