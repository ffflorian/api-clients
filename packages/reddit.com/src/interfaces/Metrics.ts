export interface Metrics {
  apdex: number;
  requests: {
    by_response_time: {
      under1000: number;
      under125: number;
      under2000: number;
      under250: number;
      under4000: number;
      under500: number;
    };
    failures: number;
    samples: number;
    satisfied: number;
    tolerated: number;
  };
  timings: {
    connection: number;
    handshake: number;
    namelookup: number;
    redirect: number;
    response: number;
    total: number;
  };
}
