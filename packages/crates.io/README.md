# crates.io [![npm version](https://img.shields.io/npm/v/crates.io.svg)](https://www.npmjs.com/package/crates.io)

A [crates.io](https://crates.io) API client. For a documentation on the API see [the crates.io API reference](https://crates.io/data-access) or [this reference](https://github.com/hcpl/crates.io-http-api-reference).

### Installation

Run `yarn add crates.io` or `npm install crates.io`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/crates.io/.

### Example

```ts
import {CratesIO} from 'crates.io';

const cratesIO = new CratesIO();

cratesIO
  .summary()
  .then(data => {
    ...
  });

cratesIO
  .api.crates.getAuthors('ripgrep', '0.10.0')
  .then(data => {
    ...
  });

cratesIO
  .api.crates.getCrates('http', {per_page: 10})
  .then(data => {
    ...
  });
```

## Build

```
yarn
yarn dist
```
