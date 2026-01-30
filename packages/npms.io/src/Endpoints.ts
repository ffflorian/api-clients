export const Endpoint = {
  MGET: 'mget',
  PACKAGE: 'package',
  Package: {
    multiPackageInfo(): string {
      return `/${Endpoint.PACKAGE}/${Endpoint.MGET}`;
    },
    packageInfo(packageName: string): string {
      return `/${Endpoint.PACKAGE}/${encodeURIComponent(packageName)}`;
    },
  },
  SEARCH: 'search',

  Search: {
    search(): string {
      return `/${Endpoint.SEARCH}`;
    },

    suggestions(): string {
      return `/${Endpoint.SEARCH}/${Endpoint.SUGGESTIONS}`;
    },
  },

  SUGGESTIONS: 'suggestions',
};
