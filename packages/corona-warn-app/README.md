# corona-warn-app [![npm version](https://img.shields.io/npm/v/corona-warn-app.svg)](https://www.npmjs.com/package/corona-warn-app)

An [corona-warn-app](https://coronawarn.app) API client. For a documentation on the API see https://github.com/corona-warn-app/cwa-server#service-apis.

### Installation

Run `yarn add corona-warn-app` or `npm install corona-warn-app`.

## Usage

A complete documentation is available at https://ffflorian.github.io/api-clients/packages/corona-warn-app/.

### Example

```ts
import {CoronaWarnApp} from 'corona-warn-app';

const cwa = new CoronaWarnApp();

cwa.api.diagnosisKeys.getCountries().then(response => {
  //
});

cwa.api.diagnosisKeys.getDatesByCountry('DE').then(response => {
  //
});
```
