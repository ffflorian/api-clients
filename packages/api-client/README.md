# api-client [![npm version](https://img.shields.io/npm/v/@ffflorian/api-client?style=flat)](https://www.npmjs.com/package/@ffflorian/api-client)

A generic API client.

### Installation

Run `yarn add @ffflorian/api-client` or `npm install @ffflorian/api-client`.

### Example

```ts
import {APIClient} from '@ffflorian/api-client';

const apiClient = new APIClient('https://my-api.io/api/v1');

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
