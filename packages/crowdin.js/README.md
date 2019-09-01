# crowdin.js [![npm version](https://img.shields.io/npm/v/crowdin.js.svg)](https://www.npmjs.com/package/crowdin.js)

A [crowdin.com](https://crowdin.com) API client. For a documentation on the API see https://support.crowdin.com/api/.

### Installation

Run `yarn add crowdin.js` or `npm install crowdin.js`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/crowdin.js/.

### Example

```ts
import {Crowdin} from 'crowdin.js';

const crowdinAPI = new Crowdin('my-api-key');

crowdinAPI.api.project.getDetails('my-project-identifier', 'my-project-key').then(response => {
  // do something
});
```

## Build and test

```
yarn
yarn test
```
