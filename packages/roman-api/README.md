# roman-api [![npm version](https://img.shields.io/npm/v/roman-api.svg)](https://www.npmjs.com/package/roman-api)

An API client for Wire's Lithium proxy [Roman](https://github.com/wireapp/roman).

### Installation

Run `yarn add roman-api` or `npm install roman-api`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/roman-api/.

### Example

```ts
import {Roman} from 'roman-api';

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
