# npms.io [![npm version](https://img.shields.io/npm/v/npms.io.svg)](https://www.npmjs.com/package/npms.io)

A [npms.io](https://npms.io) API client.

### Installation

Run `yarn add npms.io` or `npm install npms.io`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/npms.io/.

### Example

```ts
import {NpmsIO} from 'npms.io';

const npmsIO = new NpmsIO();

npmsIO
  .api.search.searchPackage('npms.io')
  .then(data => {
    ...
  });

npmsIO
  .api.search.getSuggestions('npms.io')
  .then(data => {
    ...
  });

npmsIO
  .api.package.packageInfo('npms.io')
  .then(data => {
    ...
  });

npmsIO
  .api.package.multiPackageInfo('npms.io')
  .then(data => {
    ...
  });
```

## Build

```
yarn
yarn dist
```
