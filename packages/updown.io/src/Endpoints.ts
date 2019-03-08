export namespace Endpoint {
  const CHECKS = 'checks';
  const DOWNTIMES = 'downtimes';
  const METRICS = 'metrics';
  const NODES = 'nodes';
  const IPV4 = 'ipv4';
  const IPV6 = 'ipv6';

  const encode: typeof encodeURIComponent = encodeURIComponent;

  export namespace Checks {
    export function check(token: string): string {
      return `/${CHECKS}/${encode(token)}/`;
    }

    export function downtimes(token: string): string {
      return `/${CHECKS}/${encode(token)}/${DOWNTIMES}/`;
    }

    export function metrics(token: string): string {
      return `/${CHECKS}/${encode(token)}/${METRICS}/`;
    }
  }

  export namespace Nodes {
    export function ipv4(): string {
      return `/${NODES}/${IPV4}/`;
    }
    export function ipv6(): string {
      return `/${NODES}/${IPV6}/`;
    }
  }

  export function checks(token?: string): string {
    return `/${CHECKS}/` + (token ? encode(token) + '/' : '');
  }

  export function nodes(): string {
    return `/${NODES}/`;
  }
}
