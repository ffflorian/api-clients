# useresponse [![npm version](https://img.shields.io/npm/v/useresponse.svg)](https://www.npmjs.com/package/useresponse)

A [useresponse](https://useresponse) API client. For a documentation on the API see [https://api.useresponse.com](https://api.useresponse.com).

### Installation

Run `yarn add useresponse` or `npm install useresponse`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/useresponse/.

### Example

```ts
import {UseResponse} from 'useresponse';

const useResponse = new UseResponse();

useResponse
  .api.search.searchPackage('useresponse')
  .then(data => {
    ...
  });

useResponse
  .api.search.getSuggestions('useresponse')
  .then(data => {
    ...
  });
```

## Build

```
yarn
yarn dist
```
