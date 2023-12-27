const encode: typeof encodeURIComponent = encodeURIComponent;

export const Endpoint = {
  CHECKS: 'checks',
  DOWNTIMES: 'downtimes',
  METRICS: 'metrics',
  NODES: 'nodes',
  IPV4: 'ipv4',
  IPV6: 'ipv6',

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

  Nodes: {
    ipv4(): string {
      return `/${Endpoint.NODES}/${Endpoint.IPV4}/`;
    },
    ipv6(): string {
      return `/${Endpoint.NODES}/${Endpoint.IPV6}/`;
    },
  },

  checks(token?: string): string {
    return `/${Endpoint.CHECKS}/${token ? `${encode(token)}/` : ''}`;
  },

  nodes(): string {
    return `/${Endpoint.NODES}/`;
  },
};
