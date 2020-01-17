# ICanHazDadJoke [![npm version](https://img.shields.io/npm/v/@ffflorian/icanhazdadjoke.svg)](https://www.npmjs.com/package/@ffflorian/icanhazdadjoke)

An [ICanHazDadJoke](https://icanhazdadjoke.com) API client with a CLI.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/icanhazdadjoke/.

### CLI

To use `ICanHazDadJoke` globally, run `yarn global add @ffflorian/icanhazdadjoke` or `npm i -g @ffflorian/icanhazdadjoke`.

```
Usage: icanhazdadjoke [options] [command]

An icanhazdadjoke.com API client with a CLI.

Options:
  -v, --version       output the version number
  -o, --output <dir>  Specify the output directory (default: current directory)
  -i, --image         Save the joke as image
  -s, --silent        Don't output save messages
  -h, --help          output usage information

Commands:
  random              Fetch a random dad joke
  id <id>             Fetch a dad joke by ID
```

#### Installation

Run `yarn add @ffflorian/icanhazdadjoke` or `npm install @ffflorian/icanhazdadjoke`.

#### Example

```ts
import {ICanHazDadJoke} from '@ffflorian/icanhazdadjoke';

const iCanHazDadJoke = new ICanHazDadJoke();

iCanHazDadJoke.api.getRandom().then(result => {
  // JokeResult
});

iCanHazDadJoke.api.getById('R7UfaahVfFd').then(result => {
  // JokeResult
});

iCanHazDadJoke.api.getRandom({withImage: true}).then(result => {
  // JokeResultWithImage
});

iCanHazDadJoke.api.getById('R7UfaahVfFd', {withImage: true}).then(result => {
  // JokeResultWithImage
});

iCanHazDadJoke.api.search('dog').then(result => {
  // JokeSearchResult
});

iCanHazDadJoke.api.search({term: 'dog', limit: 5}).then(result => {
  // JokeSearchResult
});

iCanHazDadJoke.api.search('dog', {limit: 5}).then(result => {
  // JokeSearchResult
});
```
