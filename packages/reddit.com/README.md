# reddit.com [![npm version](https://img.shields.io/npm/v/reddit.com.svg)](https://www.npmjs.com/package/reddit.com)

A [reddit](https://reddit.com) API client. For a documentation on the API see https://www.reddit.com/dev/api/.

### Installation

Run `yarn add reddit.com` or `npm install reddit.com`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/reddit.com/.

### Example

```ts
import {Reddit} from 'reddit.com';

const Reddit = new Reddit('my-api-key'); // API key is only required for checks

Reddit.api.checks.getChecks().then(checks => {
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
