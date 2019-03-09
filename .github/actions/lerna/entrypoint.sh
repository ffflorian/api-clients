#!/usr/bin/env bash

GITHUB_USER="ffflobot"

echo "//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}\naccess = public" > ".npmrc"
git config --global "user.email" "${GITHUB_USER}@users.noreply.github.com"
git config --global "user.name" "${GITHUB_USER}"

REPO="$(git config remote.origin.url)"
REPO="${REPO/https:\/\/github.com\//https:\/\/${GITHUB_USER}:${GH_TOKEN}@github.com\/}"
git remote set-url origin "${REPO}"

sh -c "lerna $*"
