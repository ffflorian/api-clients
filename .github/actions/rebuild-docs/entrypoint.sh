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

rm -rf docs/packages/*
./bin/updated.sh "build:docs"

if [ "$?" != "0" ]; then
  exit $?
fi

git add docs
git commit -m "docs: Rebuild docs [ci skip]"
git push origin master

rm "${HOME}/.gitconfig"

unset REPO
