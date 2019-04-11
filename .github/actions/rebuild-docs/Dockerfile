FROM node:10-slim

LABEL version="1.0.0"
LABEL repository="https://github.com/ffflorian/api-clients/tree/master/.github/actions/rebuild-docs"
LABEL homepage="https://github.com/ffflorian/api-clients/tree/master/.github/actions/rebuild-docs"
LABEL maintainer="ffflorian"

LABEL com.github.actions.name="GitHub Action to rebuild-docs"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="yellow"

RUN apt-get update && \
    apt-get install --no-install-recommends -y \
        git && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

COPY "entrypoint.sh" "/entrypoint.sh"

ENTRYPOINT ["/entrypoint.sh"]
