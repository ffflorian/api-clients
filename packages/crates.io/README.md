# crates.io.js [![npm version](https://img.shields.io/npm/v/crates.io.svg?style=flat)](https://www.npmjs.com/package/crates.io) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/crates.io.js)](https://dependabot.com)

A [crates.io](https://crates.io) API client.

## Usage

A complete documentation is available at https://ffflorian.github.io/crates.io.js/.

### Installation

Run `yarn add crates.io` or `npm install crates.io`.

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
