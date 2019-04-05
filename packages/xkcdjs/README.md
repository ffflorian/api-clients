# xkcdjs [![npm version](https://img.shields.io/npm/v/@ffflorian/xkcdjs.svg)](https://www.npmjs.com/package/@ffflorian/xkcdjs)

An [xkcd](https://xkcd.com) API client with a CLI.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/xkcdjs/.

### CLI

To use `xkcdjs` globally, run `yarn global add @ffflorian/xkcdjs` or `npm i -g @ffflorian/xkcdjs`.

```
Usage: xkcdjs [options] [command]

An xkcd API client with a CLI.

Options:
  -v, --version       output the version number
  -o, --output <dir>  Specify the output directory (default: current directory)
  -h, --help          output usage information

Commands:
  latest              Save the latest comic
  random              Save a random comic
  number <index>      Save comic by index number
```

#### Installation

Run `yarn add @ffflorian/xkcdjs` or `npm install @ffflorian/xkcdjs`.

#### Example

```ts
import {XKCD} from '@ffflorian/xkcdjs';

const xkcd = new XKCD();

xkcd.api.getLatest().then(result => {
  // XKCDResult { ... }
});

xkcd.api.getRandom().then(result => {
  // XKCDResult
});

xkcd.api.getById(2036).then(result => {
  // XKCDResult
});

xkcd.api.getLatest({withData: true}).then(result => {
  // XKCDResultWithData
});

xkcd.api.getRandom({withData: true}).then(result => {
  // XKCDResultWithData
});

xkcd.api.getById(2036, {withData: true}).then(result => {
  // XKCDResultWithData
});
```

## Build and test

```
yarn
yarn test
```
