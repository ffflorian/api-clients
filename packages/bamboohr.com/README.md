# bamboohr.com [![npm version](https://img.shields.io/npm/v/bamboohr.com.svg)](https://www.npmjs.com/package/bamboohr.com)

An [BambooHR](https://bamboohr.com) API client. For a documentation on the API see the [BambooHR API](https://documentation.bamboohr.com/reference).

### Installation

Run `yarn add bamboohr.com` or `npm install bamboohr.com`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/bamboohr.com/.

### Example

```ts
import {BambooHR} from 'bamboohr.com';

const bambooHR = new BambooHR({
  apiKey: '<your API key here>',
  companyDomain: '<your company domain here>',
});

bambooHR.api.employees.getEmployee().then(employee => console.log(employee));
```

## Build and test

```
yarn
yarn test
```
