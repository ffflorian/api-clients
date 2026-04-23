const encode: typeof encodeURIComponent = encodeURIComponent;

export const Endpoint = {
  API: 'api',
  CHECKS: 'checks',
  Checks: {
    check(token: string): string {
      return `/${Endpoint.API}/${Endpoint.CHECKS}/${encode(token)}/`;
    },

    downtimes(token: string): string {
      return `/${Endpoint.API}/${Endpoint.CHECKS}/${encode(token)}/${Endpoint.DOWNTIMES}/`;
    },

    metrics(token: string): string {
      return `/${Endpoint.API}/${Endpoint.CHECKS}/${encode(token)}/${Endpoint.METRICS}/`;
    },
  },
  checks(token?: string): string {
    return `/${Endpoint.API}/${Endpoint.CHECKS}/${token ? `${encode(token)}/` : ''}`;
  },
  DOWNTIMES: 'downtimes',
  IPS: 'ips',
  IPV4: 'ipv4',
  IPV6: 'ipv6',
  METRICS: 'metrics',
  NODES: 'nodes',

  Nodes: {
    ips(): string {
      return `/${Endpoint.API}/${Endpoint.NODES}/${Endpoint.IPS}/`;
    },

    ipv4(): string {
      return `/${Endpoint.API}/${Endpoint.NODES}/${Endpoint.IPV4}/`;
    },

    ipv6(): string {
      return `/${Endpoint.API}/${Endpoint.NODES}/${Endpoint.IPV6}/`;
    },
  },

  nodes(): string {
    return `/${Endpoint.API}/${Endpoint.NODES}/`;
  },

  RECIPIENTS: 'recipients',

  recipients(id?: string): string {
    return `/${Endpoint.API}/${Endpoint.RECIPIENTS}/${id ? `${encode(id)}/` : ''}`;
  },

  STATUS_PAGES: 'status_pages',

  statusPages(token?: string): string {
    return `/${Endpoint.API}/${Endpoint.STATUS_PAGES}/${token ? `${encode(token)}/` : ''}`;
  },
};
