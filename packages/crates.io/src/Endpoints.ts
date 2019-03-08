export namespace Endpoint {
  const AUTHORS = 'authors';
  const CRATES = 'crates';
  const DEPENDENCIES = 'dependencies';
  const DOWNLOAD = 'download';
  const DOWNLOADS = 'downloads';
  const FOLLOWING = 'following';
  const OWNERS = 'owners';
  const OWNER_TEAM = 'owner_team';
  const OWNER_USER = 'owner_user';
  const REVERSE_DEPENDENCIES = 'reverse_dependencies';
  const SUMMARY = 'summary';
  const VERSIONS = 'versions';

  const encode: typeof encodeURIComponent = encodeURIComponent;

  export namespace Crates {
    export function authors(packageName: string, version: string): string {
      return `/${CRATES}/${encode(packageName)}/${encode(version)}/${AUTHORS}`;
    }

    export function crate(packageName: string): string {
      return `/${CRATES}/${encode(packageName)}`;
    }

    export function crates(): string {
      return `/${CRATES}`;
    }

    export function dependants(packageName: string): string {
      return `/${CRATES}/${encode(packageName)}/${REVERSE_DEPENDENCIES}`;
    }

    export function dependencies(packageName: string): string {
      return `/${CRATES}/${encode(packageName)}/${DEPENDENCIES}`;
    }

    export function download(packageName: string, version: string): string {
      return `/${CRATES}/${encode(packageName)}/${encode(version)}/${DOWNLOAD}`;
    }

    export function downloads(packageName: string): string {
      return `/${CRATES}/${encode(packageName)}/${DOWNLOADS}`;
    }

    export function following(packageName: string): string {
      return `/${CRATES}/${encode(packageName)}/${FOLLOWING}`;
    }

    export function owners(packageName: string): string {
      return `/${CRATES}/${encode(packageName)}/${OWNERS}`;
    }

    export function ownerTeam(packageName: string): string {
      return `/${CRATES}/${encode(packageName)}/${OWNER_TEAM}`;
    }

    export function ownerUser(packageName: string): string {
      return `/${CRATES}/${encode(packageName)}/${OWNER_USER}`;
    }

    export function version(packageName: string, version: string): string {
      return `/${CRATES}/${encode(packageName)}/${encode(version)}`;
    }

    export function versions(packageName: string): string {
      return `/${CRATES}/${encode(packageName)}/${VERSIONS}`;
    }
  }

  export function summary(): string {
    return `/${SUMMARY}`;
  }
}
