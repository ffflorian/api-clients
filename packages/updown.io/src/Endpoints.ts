const encode: typeof encodeURIComponent = encodeURIComponent;

export const Endpoint = {
  CHECKS: 'checks',
  Checks: {
    check(token: string): string {
      return `/${Endpoint.CHECKS}/${encode(token)}/`;
    },

    downtimes(token: string): string {
      return `/${Endpoint.CHECKS}/${encode(token)}/${Endpoint.DOWNTIMES}/`;
    },

    metrics(token: string): string {
      return `/${Endpoint.CHECKS}/${encode(token)}/${Endpoint.METRICS}/`;
    },
  },
  checks(token?: string): string {
    return `/${Endpoint.CHECKS}/${token ? `${encode(token)}/` : ''}`;
  },
  DOWNTIMES: 'downtimes',
  IPV4: 'ipv4',
  IPV6: 'ipv6',

  METRICS: 'metrics',

  NODES: 'nodes',

  Nodes: {
    ipv4(): string {
      return `/${Endpoint.NODES}/${Endpoint.IPV4}/`;
    },
    ipv6(): string {
      return `/${Endpoint.NODES}/${Endpoint.IPV6}/`;
    },
  },

  nodes(): string {
    return `/${Endpoint.NODES}/`;
  },
};
