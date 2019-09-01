# crowdin.com [![npm version](https://img.shields.io/npm/v/crowdin.com.svg)](https://www.npmjs.com/package/crowdin.com)

A [crowdin.com](https://crowdin.com) API client. For a documentation on the API see https://support.crowdin.com/api/.

### Installation

Run `yarn add crowdin.com` or `npm install crowdin.com`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/crowdin.com/.

### Example

```ts
import {Crowdin} from 'crowdin.com';

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
