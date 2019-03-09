FROM node:10-slim

LABEL version="1.0.0"
LABEL repository="http://github.com/ffflorian/lerna-action-sample/tree/master/.github/actions/lerna"
LABEL homepage="http://github.com/ffflorian/lerna-action-sample/tree/master/.github/actions/lerna"
LABEL maintainer="ffflorian"

LABEL com.github.actions.name="GitHub Action for Lerna"
LABEL com.github.actions.description="Wraps the Lerna CLI to enable common Lerna commands."
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="yellow"

RUN set -ex; \
    apt-get update; \
    apt-get install -y --no-install-recommends git
RUN yarn global add lerna@~3.13

COPY "entrypoint.sh" "/entrypoint.sh"

ENTRYPOINT ["/entrypoint.sh"]
