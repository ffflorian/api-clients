# updown.io.js [![npm version](https://img.shields.io/npm/v/updown.io.svg)](https://www.npmjs.com/package/updown.io)

An [updown.io](https://updown.io) API client. For a documentation on the API see https://updown.io/api.

## Usage

A complete documentation is available at https://ffflorian.github.io/updown.io.js/.

### Installation

Run `yarn add updown.io` or `npm install updown.io`.

### Example

```ts
import {UpdownIO} from 'updown.io';

const updownIO = new UpdownIO('my-api-key'); // API key is only required for checks

UpdownIO.api.checks.getChecks().then(checks => {
  //
});

updownIO.api.nodes.getNodes().then(nodes => {
  // ...
});
```

## Build and test

```
yarn
yarn test
```
