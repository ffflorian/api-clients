#!/usr/bin/env bash

# Environment variables:
#
# - GITHUB_TOKEN: A GitHub token for pushing to GitHub (required)
# - GH_USER: A GitHub user for pushing to GitHub (required)

set -e

if [ -z "${GITHUB_TOKEN}" ]; then
  echo "No GitHub token set."
  exit 1
fi

echo "Checking for changed packages..."

LAST_TAG=$(git describe --abbrev=0 --tags 2>/dev/null || echo "")

if [ -z "${LAST_TAG}" ]; then
  echo "No previous tags found."
  exit
fi

yarn workspaces foreach --since="${LAST_TAG}" --parallel --jobs 4 --exclude api-clients run build:docs

if git diff --quiet HEAD -- docs; then
  echo "No documentation changes to commit."
  exit
fi

git add docs
git commit -m "docs: Rebuild docs [ci skip]" --no-verify
git push origin main --no-verify
