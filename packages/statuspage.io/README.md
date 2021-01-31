# statuspage.io [![npm version](https://img.shields.io/npm/v/statuspage.io.svg)](https://www.npmjs.com/package/statuspage.io)

A [statuspage.io](https://statuspage.io) API client. For a documentation on the API see https://developer.statuspage.io/.

### Installation

Run `yarn add statuspage.io` or `npm install statuspage.io`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/statuspage.io/.

### Example

```ts
import {Statuspage} from 'statuspage.io';

const statuspage = new Statuspage('kctbh9vrtdwd');

statuspage.api.incidents.getAll().then(response => {
  //
});
```

## Build and test

```
yarn
yarn test
```
