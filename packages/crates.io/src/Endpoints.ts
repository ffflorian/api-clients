const encode: typeof encodeURIComponent = encodeURIComponent;

export const Endpoint = {
  AUTHORS: 'authors',
  CRATES: 'crates',
  Crates: {
    authors(packageName: string, version: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}/${Endpoint.AUTHORS}`;
    },

    crate(packageName: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}`;
    },

    crates(): string {
      return `/${Endpoint.CRATES}`;
    },

    dependencies(packageName: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.DEPENDENCIES}`;
    },

    download(packageName: string, version: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}/${Endpoint.DOWNLOAD}`;
    },

    downloads(packageName: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.DOWNLOADS}`;
    },

    following(packageName: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.FOLLOWING}`;
    },

    owners(packageName: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.OWNERS}`;
    },

    ownerTeam(packageName: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.OWNER_TEAM}`;
    },

    ownerUser(packageName: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.OWNER_USER}`;
    },

    reverseDependencies(packageName: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.REVERSE_DEPENDENCIES}`;
    },

    version(packageName: string, version: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${encode(version)}`;
    },

    versions(packageName: string): string {
      return `/${Endpoint.CRATES}/${encode(packageName)}/${Endpoint.VERSIONS}`;
    },
  },
  DEPENDENCIES: 'dependencies',
  DOWNLOAD: 'download',
  DOWNLOADS: 'downloads',
  FOLLOWING: 'following',
  OWNER_TEAM: 'owner_team',
  OWNER_USER: 'owner_user',
  OWNERS: 'owners',
  REVERSE_DEPENDENCIES: 'reverse_dependencies',
  SUMMARY: 'summary',

  summary(): string {
    return `/${Endpoint.SUMMARY}`;
  },

  VERSIONS: 'versions',
};
