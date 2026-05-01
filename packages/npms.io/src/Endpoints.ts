export const Endpoint = {
  API_VERSION: 'v2',
  MGET: 'mget',
  PACKAGE: 'package',
  Package: {
    multiPackageInfo(): string {
      return `${Endpoint.API_VERSION}/${Endpoint.PACKAGE}/${Endpoint.MGET}`;
    },
    packageInfo(packageName: string): string {
      return `${Endpoint.API_VERSION}/${Endpoint.PACKAGE}/${encodeURIComponent(packageName)}`;
    },
  },
  SEARCH: 'search',

  Search: {
    search(): string {
      return `${Endpoint.API_VERSION}/${Endpoint.SEARCH}`;
    },

    suggestions(): string {
      return `${Endpoint.API_VERSION}/${Endpoint.SEARCH}/${Endpoint.SUGGESTIONS}`;
    },
  },

  SUGGESTIONS: 'suggestions',
};
