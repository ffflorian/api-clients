export const Endpoint = {
  PACKAGE: 'package',
  SEARCH: 'search',
  SUGGESTIONS: 'suggestions',
  MGET: 'mget',

  Search: {
    search(): string {
      return `/${Endpoint.SEARCH}`;
    },

    suggestions(): string {
      return `/${Endpoint.SEARCH}/${Endpoint.SUGGESTIONS}`;
    },
  },

  Package: {
    packageInfo(packageName: string): string {
      return `/${Endpoint.PACKAGE}/${encodeURIComponent(packageName)}`;
    },
    multiPackageInfo(): string {
      return `/${Endpoint.PACKAGE}/${Endpoint.MGET}`;
    },
  },
};
