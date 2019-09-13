export namespace Endpoint {
  const PACKAGE = 'package';
  const SEARCH = 'search';
  const SUGGESTIONS = 'suggestions';
  const MGET = 'mget';

  export namespace Search {
    export function search(): string {
      return `/${SEARCH}`;
    }

    export function suggestions(): string {
      return `/${SEARCH}/${SUGGESTIONS}`;
    }
  }

  export namespace Package {
    export function packageInfo(packageName: string): string {
      return `/${PACKAGE}/${encodeURIComponent(packageName)}`;
    }
    export function multiPackageInfo(): string {
      return `/${PACKAGE}/${MGET}`;
    }
  }
}
