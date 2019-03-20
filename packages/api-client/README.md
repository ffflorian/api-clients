# api-client [![npm version](https://img.shields.io/npm/v/@ffflorian/api-client.svg)](https://www.npmjs.com/package/@ffflorian/api-client)

A generic API client.

### Installation

Run `yarn add @ffflorian/api-client` or `npm install @ffflorian/api-client`.

### Examples

```ts
import {APIClient} from '@ffflorian/api-client';

const apiClient = new APIClient('https://example.com/api/v1');

apiClient.requestService.get('/endpoint', {
  headers: {
    'Authorization': 'my-api-key',
  },
}).then(data => {
  ...
})
```

```ts
import {APIClient} from '@ffflorian/api-client';

const apiClient = new APIClient({
  apiUrl: 'https://example.com/api/v1',
  requestInjector: config => {
    const hawkHeader = hawk.client.header(config.url, config.method, {credentials});
    return {
      ...config,
      headers: {
        Authorization: hawkHeader.header,
      },
    }
  }
});

apiClient.requestService.get('/endpoint', {
  headers: {
    'Authorization': 'my-api-key',
  },
}).then(data => {
  ...
})
```

## Build

```
yarn
yarn dist
```
