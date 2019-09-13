import {PackageAPI, SearchAPI} from '../api/';

export interface API {
  package: PackageAPI;
  search: SearchAPI;
}
