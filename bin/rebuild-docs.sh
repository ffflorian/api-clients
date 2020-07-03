#!/usr/bin/env bash

# Environment variables:
#
# - GH_TOKEN: A GitHub token for pushing to GitHub (required)
# - GH_USER: A GitHub user for pushing to GitHub (required)

set -e

SCOPE=""

if [ -z "${GH_TOKEN}" ]; then
  echo "No GitHub token set."
  exit 1
fi

if [ -z "${GH_USER}" ]; then
  echo "No GitHub user set."
  exit 1
fi

echo "Checking for changed packages..."

set +e
PACKAGES="$(npx lerna changed --loglevel warn)"
set -e

if [ -z "${PACKAGES}" ]; then
  echo "No local packages have changed since the last tagged release."
  exit
fi

for PACKAGE in $PACKAGES; do
  SCOPE="${SCOPE} --scope ${PACKAGE}"
done

npx lerna run build:docs --concurrency 4"${SCOPE}"

git add docs
git commit -m "docs: Rebuild docs [ci skip]" --no-verify
git push origin main --no-verify
