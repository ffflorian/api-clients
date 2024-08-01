# imgflip.com [![npm version](https://img.shields.io/npm/v/imgflip.com.svg)](https://www.npmjs.com/package/imgflip.com)

An [imgflip.com](https://imgflip.com) API client. For a documentation on the API see https://api.imgflip.com/.

### Installation

Run `yarn add imgflip.com` or `npm install imgflip.com`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/imgflip.com/.

### Example

```ts
import {Imgflip} from 'imgflip.com';

const imgflip = new Imgflip();

imgflip.api
  .getMemes().then(response => {
    //
  });

imgflip.api
  .captionImage({
    username: 'myUser',
    password: 'secret-password',
    template_id: 438680,
    // ...
  })
  .then(response => {
    //
  });
```

## Build and test

```
yarn
yarn test
```
