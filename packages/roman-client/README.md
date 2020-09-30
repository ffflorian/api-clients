# roman-client [![npm version](https://img.shields.io/npm/v/roman-client.svg)](https://www.npmjs.com/package/roman-client)

An API client for Wire's Lithium proxy [Roman](https://github.com/wireapp/roman).

### Installation

Run `yarn add roman-client` or `npm install roman-client`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/roman-client/.

### Example

```ts
import {Roman} from 'roman-client';

const roman = new Roman('https://example.com');

roman.api.loginService
  .login()
  .then(response => {
    return roman.api.serviceService.postService({
      name: 'My Weather Bot',
      summary: 'Display the weather in your region.',
    });
  })
  .then(data => {
    // ...
  });
```

## Build and test

```
yarn
yarn test
```
