# xkcdjs [![npm version](https://img.shields.io/npm/v/@ffflorian/xkcdjs.svg?style=flat)](https://www.npmjs.com/package/@ffflorian/xkcdjs) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/xkcdjs)](https://dependabot.com)

An [xkcd](https://xkcd.com) API client with a CLI.

## Usage

### CLI

To use `xkcdjs` globally, run `yarn global add @ffflorian/xkcdjs` or `npm i -g @ffflorian/xkcdjs`.

```
Usage: xkcdjs [options] [command]

  Options:

    -v, --version       output the version number
    -o, --output <dir>  Specify the output directory (default: current directory)
    -h, --help          output usage information

  Commands:

    latest              Save the latest comic
    random              Save a random comic
    number <index>      Save comic by index number
```

### TypeScript

A complete documentation is available at https://ffflorian.github.io/xkcdjs/.

#### Installation

Run `yarn add @ffflorian/xkcdjs` or `npm install @ffflorian/xkcdjs`.

#### Example

```ts
import {XKCD} from '@ffflorian/xkcdjs';

const xkcd = new XKCD();

xkcd.getLatest().then(result => {
  // XKCDResult { ... }
});

xkcd.getRandom().then(result => {
  // XKCDResult
});

xkcd.getById(2036).then(result => {
  // XKCDResult
});

xkcd.getLatest({withData: true}).then(result => {
  // XKCDResultWithData
});

xkcd.getRandom({withData: true}).then(result => {
  // XKCDResultWithData
});

xkcd.getById(2036, {withData: true}).then(result => {
  // XKCDResultWithData
});
```

## Build and test

```
yarn
yarn test
```
