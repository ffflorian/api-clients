const encode: typeof encodeURIComponent = encodeURIComponent;

const apiPrefix = '/api/v1';

export const Endpoint = {
  AUTHORS: 'authors',
  CATEGORIES: 'categories',
  Categories: {
    categories(): string {
      return `${apiPrefix}/${Endpoint.CATEGORIES}`;
    },

    category(category: string): string {
      return `${apiPrefix}/${Endpoint.CATEGORIES}/${encode(category)}`;
    },
  },
  CRATES: 'crates',

  Crates: {
    authors(packageName: string, version: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}/${Endpoint.AUTHORS}`;
    },

    crate(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}`;
    },

    crates(): string {
      return `${apiPrefix}/${Endpoint.CRATES}`;
    },

    dependencies(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.DEPENDENCIES}`;
    },

    dependenciesByVersion(packageName: string, version: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}/${Endpoint.DEPENDENCIES}`;
    },

    download(packageName: string, version: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}/${Endpoint.DOWNLOAD}`;
    },

    downloads(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.DOWNLOADS}`;
    },

    follow(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.FOLLOW}`;
    },

    following(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.FOLLOWING}`;
    },

    owners(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.OWNERS}`;
    },

    ownerTeam(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.OWNER_TEAM}`;
    },

    ownerUser(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.OWNER_USER}`;
    },

    reverseDependencies(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.REVERSE_DEPENDENCIES}`;
    },

    unyank(packageName: string, version: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}/${Endpoint.UNYANK}`;
    },

    version(packageName: string, version: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}`;
    },

    versionDownloads(packageName: string, version: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}/${Endpoint.DOWNLOADS}`;
    },

    versions(packageName: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.VERSIONS}`;
    },

    yank(packageName: string, version: string): string {
      return `${apiPrefix}/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}/${Endpoint.YANK}`;
    },
  },

  DEPENDENCIES: 'dependencies',
  DOWNLOAD: 'download',
  DOWNLOADS: 'downloads',
  FOLLOW: 'follow',
  FOLLOWING: 'following',
  KEYWORDS: 'keywords',

  Keywords: {
    keyword(keyword: string): string {
      return `${apiPrefix}/${Endpoint.KEYWORDS}/${encode(keyword)}`;
    },

    keywords(): string {
      return `${apiPrefix}/${Endpoint.KEYWORDS}`;
    },
  },

  OWNER_TEAM: 'owner_team',
  OWNER_USER: 'owner_user',
  OWNERS: 'owners',
  REVERSE_DEPENDENCIES: 'reverse_dependencies',
  SUMMARY: 'summary',
  summary(): string {
    return `${apiPrefix}/${Endpoint.SUMMARY}`;
  },

  UNYANK: 'unyank',

  VERSIONS: 'versions',
  YANK: 'yank',
};
