# libraries.io.js [![npm version](https://img.shields.io/npm/v/libraries.io.svg?style=flat)](https://www.npmjs.com/package/libraries.io) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/libraries.io.js)](https://dependabot.com)

A [libraries.io](https://libraries.io) API client. For a documentation on the API see https://libraries.io/api.

## Usage

A complete documentation is available at https://ffflorian.github.io/libraries.io.js/.

### Installation

Run `yarn add libraries.io` or `npm install libraries.io`.

### Example

```ts
import {LibrariesIO} from 'libraries.io';

const librariesIO = new LibrariesIO('my-api-key');

librariesIO.api.project.getProject('npm', 'grunt').then(response => {
  //
});

librariesIO.api.project
  .search('grunt', {
    filter: {
      platforms: ['npm'],
      licenses: ['MIT'],
    },
  })
  .then(projects => {
    // ...
  });

librariesIO.api.github.user.getUser('ffflorian').then(user => {
  // ...
});

librariesIO.api.platform.getPlatforms({page: 2, perPage: 5}).then(platforms => {
  // ...
});

librariesIO.api.user.subscribe('npm', 'grunt').then(subscription => {
  // ...
});
```

## Build and test

```
yarn
yarn test
```
