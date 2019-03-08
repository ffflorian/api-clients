# absence.io.js [![npm version](https://img.shields.io/npm/v/absence.io.svg?style=flat)](https://www.npmjs.com/package/absence.io)

An [absence.io](https://absence.io) API client. For a documentation on the API see the [absence.io API](https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis).

### Installation

Run `yarn add absence.io` or `npm install absence.io`.

### Example

```ts
import {AbsenceIO} from 'absence.io';

const absenceIO = new AbsenceIO({
  apiKey: '<your API key here>',
  apiKeyId: '<your API key ID here>',
});

absenceIO.api.absence.retrieveAbsences().then(absences => console.log(absences));
```

## Build and test

```
yarn
yarn test
```
