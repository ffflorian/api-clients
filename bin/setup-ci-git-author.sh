#!/usr/bin/env bash

set -euo pipefail

export GIT_AUTHOR_NAME="Florian Imdahl"
export GIT_AUTHOR_EMAIL="ffflorian@users.noreply.github.com"

export GIT_COMMITTER_NAME="${GIT_AUTHOR_NAME}"
export GIT_COMMITTER_EMAIL="${GIT_AUTHOR_EMAIL}"

git config --global "user.email" "${GIT_AUTHOR_EMAIL}"
git config --global "user.name" "${GIT_AUTHOR_NAME}"
