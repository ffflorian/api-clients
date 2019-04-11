#!/usr/bin/env bash

# Environment variables:
#
# - GH_TOKEN: A GitHub token for pushing to GitHub (required)
# - GH_USER: A GitHub user for pushing to GitHub (required)

set -e

if [ -z "${GH_TOKEN}" ]; then
  echo "No GitHub token set."
  exit 1
fi

if [ -z "${GH_USER}" ]; then
  echo "No GitHub user set."
  exit 1
fi

git config --global "user.email" "${GH_USER}@users.noreply.github.com"
git config --global "user.name" "${GH_USER}"

REPO="$(git config remote.origin.url)"
REPO="${REPO/https:\/\/github.com\//https:\/\/${GH_USER}:${GH_TOKEN}@github.com\/}"
git remote set-url origin "${REPO}"

echo "Checking for changed packages..."

set +e
PACKAGES="$(npx lerna changed --loglevel warn)"
set -e

if [ -z "${PACKAGES}" ]; then
  echo "No local packages have changed since the last tagged release."
  exit
fi

rm -rf docs/packages/*

for PACKAGE in $PACKAGES; do
  echo "Running \"${COMMAND}\" for package \"${PACKAGE}\"..."
  npx lerna run --scope "${PACKAGE}" "${COMMAND}"
done

git add docs
git commit -m "docs: Rebuild docs [ci skip]"
git push origin master

rm "${HOME}/.gitconfig"

unset REPO
